/* Seen survey charts (54 responses, Jan to Mar 2025), in Seen's own colours.
   Usage: <div data-seen-chart="tracking"></div> (or "discovery", "features"), then load this script once.
   Each chart animates the first time it scrolls into view. With reduced motion it shows the final state. */
(function(){
  var N=54;
  var C={bg:'#0B0D26',surface:'#151838',dim:'#2A2E57',text:'#E6E6E6',muted:'#9FA3B8',accent:'#9D8DF0'};

  var CSS=[
    '.sc{--sc-bg:'+C.bg+';--sc-surface:'+C.surface+';--sc-dim:'+C.dim+';--sc-text:'+C.text+';--sc-muted:'+C.muted+';--sc-accent:'+C.accent+';',
      'background:var(--sc-bg);color:var(--sc-text);border-radius:20px;padding:36px 40px 32px;margin:40px 0 0;',
      'font-family:var(--sans,"Figtree",system-ui,sans-serif)}',
    '.sc *{box-sizing:border-box}',
    '.sc-kicker{font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--sc-accent);margin:0 0 8px}',
    '.sc-title{font-size:24px;line-height:1.25;font-weight:700;margin:0;max-width:560px}',
    '.sc-note{font-size:14px;line-height:1.4;color:var(--sc-muted);margin:6px 0 28px}',
    '.sc-waffle-wrap{display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center}',
    '.sc-big{font-size:88px;line-height:.9;font-weight:800;color:var(--sc-accent);font-variant-numeric:tabular-nums;letter-spacing:-.03em}',
    '.sc-big-cap{font-size:16px;line-height:1.4;margin-top:10px;max-width:220px}',
    '.sc-waffle{display:grid;grid-template-columns:repeat(9,1fr);gap:8px;max-width:340px;justify-self:end;width:100%}',
    '.sc-dot{aspect-ratio:1;border-radius:50%;background:var(--sc-dim);transform:scale(0)}',
    '.sc-dot.a{background:var(--sc-accent)}.sc-dot.b{background:var(--sc-text)}',
    '.sc-legend{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:28px;padding-top:20px;border-top:1px solid rgba(230,230,230,.14);font-size:14px;color:var(--sc-muted)}',
    '.sc-legend i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:0}',
    '.sc-legend b{color:var(--sc-text);font-weight:600}',
    '.sc-rows{display:grid;gap:18px}',
    '.sc-row{display:grid;grid-template-columns:96px 1fr;column-gap:20px;align-items:center}',
    '.sc-pct{font-size:40px;line-height:1;font-weight:800;font-variant-numeric:tabular-nums;color:var(--sc-muted);letter-spacing:-.02em}',
    '.sc-row.hi .sc-pct{color:var(--sc-accent)}',
    '.sc-lab{font-size:16px;font-weight:600;margin-bottom:8px}',
    '.sc-track{height:14px;border-radius:7px;background:var(--sc-surface);overflow:hidden}',
    '.sc-bar{height:100%;width:0;border-radius:7px;background:var(--sc-dim)}',
    '.sc-row.hi .sc-bar{background:var(--sc-accent)}',
    '.sc-rank{display:grid;gap:4px}',
    '.sc-f{display:grid;grid-template-columns:minmax(150px,300px) 1fr 48px;column-gap:20px;align-items:center;min-height:40px}',
    '.sc-f-lab{font-size:15px;line-height:1.3}',
    '.sc-f-tag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--sc-accent);border:1px solid var(--sc-accent);border-radius:999px;padding:2px 7px;margin-left:8px;vertical-align:1px}',
    '.sc-f-line{position:relative;height:2px;background:var(--sc-surface)}',
    '.sc-f-fill{position:absolute;left:0;top:0;height:2px;width:0;background:var(--sc-dim)}',
    '.sc-f-dot{position:absolute;top:50%;left:0;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--sc-muted)}',
    '.sc-f-val{text-align:right;font-weight:700;font-size:16px;font-variant-numeric:tabular-nums;color:var(--sc-muted)}',
    '.sc-f.hi .sc-f-lab{font-weight:700}.sc-f.hi .sc-f-dot{background:var(--sc-accent);box-shadow:0 0 0 5px rgba(157,141,240,.22)}',
    '.sc-f.hi .sc-f-fill{background:var(--sc-accent)}.sc-f.hi .sc-f-val{color:var(--sc-accent)}',
    '.sc-f.social .sc-f-dot{background:var(--sc-bg);border:2px solid var(--sc-accent)}',
    '.sc-foot{font-size:14px;line-height:1.45;color:var(--sc-muted);margin:24px 0 0;padding-top:18px;border-top:1px solid rgba(230,230,230,.14)}',
    '.sc-foot b{color:var(--sc-text);font-weight:600}',
    '@media(max-width:640px){',
      '.sc{padding:26px 22px 24px;border-radius:16px;margin-top:28px}.sc-title{font-size:20px}',
      '.sc-waffle-wrap{grid-template-columns:1fr;gap:24px}.sc-waffle{justify-self:start}.sc-big{font-size:68px}',
      '.sc-row{grid-template-columns:72px 1fr;column-gap:14px}.sc-pct{font-size:30px}.sc-lab{font-size:15px}',
      '.sc-f{grid-template-columns:1fr 44px;row-gap:8px;padding:6px 0}.sc-f-line{grid-column:1/-1;grid-row:2}.sc-f-val{grid-column:2;grid-row:1}',
    '}'
  ].join('');

  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
  function pct(v){return Math.round(v/N*100)}
  function ease(k){return 1-Math.pow(1-k,3)}
  function back(k){var s=2.2;return 1+(s+1)*Math.pow(k-1,3)+s*Math.pow(k-1,2)}
  function clamp(k){return Math.min(1,Math.max(0,k))}
  function head(box,kicker,title,note){box.appendChild(el('p','sc-kicker',kicker));box.appendChild(el('p','sc-title',title));box.appendChild(el('p','sc-note',note))}

  var BUILD={
    tracking:function(box){
      head(box,'Survey','How people keep track of what to watch','Their main method. One dot per person, 54 responses.');
      var wrap=el('div','sc-waffle-wrap');
      var left=el('div');var big=el('div','sc-big','0%');left.appendChild(big);
      left.appendChild(el('div','sc-big-cap','keep track in their head, in a notes app, or not at all.'));
      var grid=el('div','sc-waffle'),dots=[];
      [['a',25],['a',18],['a',4],['b',5],['',2]].forEach(function(g){for(var i=0;i<g[1];i++){var d=el('i','sc-dot'+(g[0]?' '+g[0]:''));grid.appendChild(d);dots.push(d)}});
      wrap.appendChild(left);wrap.appendChild(grid);box.appendChild(wrap);
      var lg=el('div','sc-legend');
      [['In their head',25,C.accent],["Don't track",18,C.accent],['Notes app',4,C.accent],['Tracking app',5,C.text],['Other',2,C.dim]].forEach(function(r){
        var s=el('span');var i=el('i');i.style.background=r[2];s.appendChild(i);s.appendChild(document.createTextNode(r[0]+' '));s.appendChild(el('b',null,String(r[1])));lg.appendChild(s)});
      box.appendChild(lg);
      box.setAttribute('aria-label','How people keep track of what to watch, 54 responses: in their head 25, don’t track 18, notes app 4, tracking app 5, other 2. 87% keep track in their head, in a notes app, or not at all.');
      return function(t){
        var done=true;
        dots.forEach(function(d,i){var k=clamp((t-i*.022)/.35);if(k<1)done=false;d.style.transform='scale('+back(k)+')'});
        var n=clamp((t-.2)/1.2);if(n<1)done=false;big.textContent=Math.round(87*ease(n))+'%';
        return done;
      };
    },
    discovery:function(box){
      head(box,'Survey','Where people find new things to watch','Select all that apply. 54 responses.');
      var rows=el('div','sc-rows'),parts=[];
      [['Friends',40,1],['Social media',32,0],['Streaming suggestions',27,0],['Review websites',9,0]].forEach(function(r){
        var row=el('div','sc-row'+(r[2]?' hi':''));var p=el('div','sc-pct','0%');var right=el('div');
        right.appendChild(el('div','sc-lab',r[0]));var tr=el('div','sc-track'),bar=el('div','sc-bar');tr.appendChild(bar);right.appendChild(tr);
        row.appendChild(p);row.appendChild(right);rows.appendChild(row);parts.push({p:p,bar:bar,v:pct(r[1])});
      });
      box.appendChild(rows);
      box.setAttribute('aria-label','Where people find new things to watch: friends 74%, social media 59%, streaming suggestions 50%, review websites 17%.');
      return function(t){
        var done=true;
        parts.forEach(function(q,i){var k=clamp((t-i*.12)/1);if(k<1)done=false;var e=ease(k);q.bar.style.width=(q.v*e)+'%';q.p.textContent=Math.round(q.v*e)+'%'});
        return done;
      };
    },
    features:function(box){
      head(box,'Survey','Which features matter most','Share of people who rated each feature 4 or 5 out of 5. 54 responses.');
      var list=el('div','sc-rank'),parts=[];
      [['Personalised recommendations',36,'hi'],['Avoiding spoilers',28,''],['Rating shows and films',26,''],['Syncing with streaming services',24,''],
       ['Tracking what I watch',23,''],['Seeing what friends are watching',16,'social'],['Episode discussion',13,'social']].forEach(function(r){
        var row=el('div','sc-f'+(r[2]?' '+r[2]:''));var lab=el('div','sc-f-lab',r[0]);if(r[2]==='social')lab.appendChild(el('span','sc-f-tag','Social'));
        var line=el('div','sc-f-line'),fill=el('div','sc-f-fill'),dot=el('div','sc-f-dot');line.appendChild(fill);line.appendChild(dot);
        var val=el('div','sc-f-val','0%');row.appendChild(lab);row.appendChild(line);row.appendChild(val);list.appendChild(row);
        parts.push({fill:fill,dot:dot,val:val,v:pct(r[1])});
      });
      box.appendChild(list);
      var foot=el('p','sc-foot');foot.appendChild(el('b',null,'The social features came last. '));
      foot.appendChild(document.createTextNode('People wanted good recommendations more than a feed of what friends are doing.'));
      box.appendChild(foot);
      box.setAttribute('aria-label','Features rated 4 or 5 out of 5: personalised recommendations 67%, avoiding spoilers 52%, rating 48%, syncing with streaming services 44%, tracking 43%, seeing what friends are watching 30%, episode discussion 24%.');
      return function(t){
        var done=true;
        parts.forEach(function(q,i){var k=clamp((t-i*.1)/1);if(k<1)done=false;var e=ease(k)*q.v;q.fill.style.width=e+'%';q.dot.style.left=e+'%';q.val.textContent=Math.round(e)+'%'});
        return done;
      };
    }
  };

  function setup(box){
    var kind=box.getAttribute('data-seen-chart');if(!BUILD[kind]||box.scReady)return;box.scReady=true;
    box.classList.add('sc');box.setAttribute('role','img');
    var step=BUILD[kind](box);
    [].forEach.call(box.children,function(ch){ch.setAttribute('aria-hidden','true')});
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){step(99);return}
    step(0);
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;io.disconnect();
      var t0=null;requestAnimationFrame(function tick(now){if(t0===null)t0=now;if(!step((now-t0)/1000))requestAnimationFrame(tick)});
    })},{threshold:.35});
    io.observe(box);
  }
  function init(){
    if(!document.getElementById('sc-css')){var s=el('style');s.id='sc-css';s.textContent=CSS;document.head.appendChild(s)}
    [].forEach.call(document.querySelectorAll('[data-seen-chart]'),setup);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
