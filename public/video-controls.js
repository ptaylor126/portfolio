/* Shared controls for the autoplaying case study videos.
   Markup: <div class="cs-video"><video muted loop playsinline preload="none" poster="…">…</video></div>
   - Autoplays muted and looping. With reduced motion: poster and a play button, no autoplay.
   - Pause/Play and Restart buttons, bottom right. Shown on hover and focus, always on touch screens.
     At 800px wide or less they sit in a row below the video instead of on top of it.
   - Pauses when scrolled out of view and resumes when back, unless the visitor paused it.
   - A video with the controls attribute keeps the browser's own controls and gets no extra buttons. */
(function(){
  var CSS=[
    '.vc{position:absolute;right:16px;bottom:16px;display:flex;gap:8px;opacity:0;transition:opacity .15s}',
    '.cs-video:hover .vc,.cs-video:focus-within .vc{opacity:1}',
    '@media(hover:none),(max-width:800px){.vc{opacity:1}}',
    /* Phones: a row below the video, right-aligned, so nothing covers the picture */
    '@media(max-width:800px){.vc{position:static;justify-content:flex-end;margin-top:8px}}',
    '.cs-video.is-still .vc{display:none}',
    '.vc-btn,.video-play{border:0;border-radius:50%;cursor:pointer;color:#fff;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:0;-webkit-appearance:none;appearance:none}',
    '.vc-btn{width:44px;height:44px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}',
    '.vc-btn svg{width:20px;height:20px;fill:currentColor;display:block}',
    '.vc-btn:hover,.video-play:hover{background:rgba(0,0,0,.88)}',
    '.vc-btn:focus-visible,.video-play:focus-visible{outline:3px solid #fff;outline-offset:2px;box-shadow:0 0 0 7px #000}',
    '.video-play{display:none;position:absolute;right:24px;bottom:24px;width:64px;height:64px;border:2px solid #fff;background:#000;box-shadow:0 6px 20px rgba(0,0,0,.25)}',
    '.video-play svg{width:24px;height:24px;margin-left:3px;fill:currentColor}',
    '.cs-video.is-still .video-play{display:flex}',
    '@media(max-width:800px){.video-play{right:12px;bottom:12px;width:48px;height:48px}.video-play svg{width:18px;height:18px}}',
    '@media(prefers-reduced-motion:reduce){.vc{transition:none}}'
  ].join('\n');

  var ICON={
    play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4" width="4.5" height="16" rx="1"/><rect x="14" y="4" width="4.5" height="16" rx="1"/></svg>',
    restart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V1.5L7 6l5 4.5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>'
  };

  function button(cls,label,icon){
    var b=document.createElement('button');
    b.type='button';b.className=cls;b.setAttribute('aria-label',label);b.innerHTML=icon;
    return b;
  }

  function setup(wrap){
    var video=wrap.querySelector('video');
    if(!video||wrap.vcReady)return;
    wrap.vcReady=true;
    var native=video.controls;  /* browser controls: add no buttons of our own */
    var rm=window.matchMedia('(prefers-reduced-motion: reduce)');
    var started=false;      /* the visitor pressed play in reduced-motion mode */
    var userPaused=false;   /* the visitor pressed pause: don't resume on scroll */
    var inView=true;

    var bigPlay=button('video-play','Play video',ICON.play);
    var bar=document.createElement('div');bar.className='vc';
    var toggle=button('vc-btn vc-toggle','Pause video',ICON.pause);
    var restart=button('vc-btn vc-restart','Restart video',ICON.restart);
    bar.appendChild(toggle);bar.appendChild(restart);
    if(!native){wrap.appendChild(bigPlay);wrap.appendChild(bar)}

    function play(){
      video.preload='auto';
      var p=video.play();
      /* Autoplay blocked by the browser: fall back to the poster and play button */
      if(p&&p.catch)p.catch(function(e){if(e&&e.name==='NotAllowedError')wrap.classList.add('is-still')});
    }
    function sync(){
      var paused=video.paused;
      toggle.setAttribute('aria-label',paused?'Play video':'Pause video');
      toggle.innerHTML=paused?ICON.play:ICON.pause;
    }
    function canAuto(){return !rm.matches||started}
    function setMode(){
      if(started)return;
      if(rm.matches){video.pause();wrap.classList.add('is-still')}
      else{wrap.classList.remove('is-still');if(inView&&!userPaused)play()}
    }

    video.addEventListener('play',function(){wrap.classList.remove('is-still');sync()});
    video.addEventListener('pause',sync);
    if(native){
      /* Play and pause come from the browser controls. A pause while on screen is the visitor's. */
      video.addEventListener('play',function(){userPaused=false;if(rm.matches)started=true});
      video.addEventListener('pause',function(){if(inView&&!video.ended)userPaused=true});
    }

    bigPlay.addEventListener('click',function(){
      started=true;userPaused=false;
      wrap.classList.remove('is-still');
      play();toggle.focus();
    });
    toggle.addEventListener('click',function(){
      if(video.paused){userPaused=false;play()}
      else{userPaused=true;video.pause()}
    });
    restart.addEventListener('click',function(){
      userPaused=false;video.currentTime=0;play();
    });

    if('IntersectionObserver' in window){
      new IntersectionObserver(function(entries){
        inView=entries[entries.length-1].isIntersecting;
        if(!canAuto()||userPaused)return;
        if(inView)play();else video.pause();
      },{threshold:0}).observe(wrap);
    }
    if(rm.addEventListener)rm.addEventListener('change',setMode);
    setMode();sync();
  }

  function init(){
    if(!document.getElementById('vc-style')){
      var s=document.createElement('style');s.id='vc-style';s.textContent=CSS;document.head.appendChild(s);
    }
    document.querySelectorAll('.cs-video').forEach(setup);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
