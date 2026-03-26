export const siteConfig = {
  name: 'Paul Taylor',
  title: 'UX/UI Designer',
  tagline: "I'm a photographer-turned-designer specializing in UX/UI & design systems for AI enhanced experiences. Camera still always close by.",
  currentRole: 'Currently designing intelligent meal planning solutions @ MealMatch AI',
  resumeUrl: 'https://drive.google.com/file/d/1XDFRARRMCelp--CW1QSG9yTvu3VQGOKT/view?usp=sharing',
  previousWork: ['Medical apps', 'SaaS platforms', 'AI-powered tools'],
}

export const projects = [
  {
    slug: 'allergytracker',
    title: 'AllergyTracker',
    description: 'Delivered 20% faster symptom tracking through accessibility-focused UX redesign',
    tags: ['Health tech', 'UX/UI Design', 'Medical UX', 'Accessibility'],
    thumbnail: '/images/image-003.png',
    images: [
      '/images/image-004.png',
      '/images/image-007.png',
      '/images/image-008.png',
    ],
  },
  {
    slug: 'jetsweat',
    title: 'JetSweat',
    description: 'Transforming a B2B fitness platform through product-led growth design',
    tags: ['SaaS fitness platform', 'UX/UI Design', 'Self-serve CMS', '25% growth'],
    thumbnail: '/images/image-005.png',
    images: [
      '/images/image-010.png',
    ],
  },
]

export const testimonials = [
  {
    name: 'Alex Leite',
    role: 'Growth Leader | Senior Director @ Microsoft 365',
    image: '/images/image-011.png',
    quote: "Paul isn't just a great designer—he's a true problem-solver. He consistently transformed complex challenges into elegant, user-centered solutions that elevated the entire product experience. His ability to blend strategic thinking with pixel-perfect execution made a huge impact on our platform. Any team looking for a visionary yet grounded UX leader would be fortunate to have him.",
    highlight: "He consistently transformed complex challenges into elegant, user-centered solutions that elevated the entire product experience.",
  },
  {
    name: 'Joella Degollado',
    role: 'Experience Designer & Strategist',
    image: '/images/image-012.png',
    quote: "Working alongside Paul is not just productive, but genuinely enjoyable. He excels in team settings, always welcoming diverse perspectives and ensuring everyone feels valued and heard. The harmony he strikes between user needs and business goals results in designs that not only meet but exceed expectations. His talent lies in his ability to innovate a variety of design solutions and create engaging interactive experiences that captivate users.",
    highlight: "He excels in team settings, always welcoming diverse perspectives and ensuring everyone feels valued and heard.",
  },
  {
    name: 'Kim Hartford',
    role: 'Founding Product Designer',
    image: '/images/image-013.png',
    quote: "From the beginning Paul demonstrated a strong understanding of interaction design by leveraging existing mental models in his projects. Paul excels in both individual work and teamwork. He is strong in all areas of UX from research to design, with an aptitude for prototyping. Paul is humble, down to earth, and would make a great addition to any team.",
    highlight: "He is strong in all areas of UX from research to design, with an aptitude for prototyping.",
  },
  {
    name: 'Alexandra Dantzig',
    role: 'Co-Founder and CEO @ Jetsweat',
    image: '/images/image-014.png',
    quote: "Paul is a talented UX designer with a unique ability to distill complex features into clean designs and seamless user flows. His process and insights really made an impact for us.",
    highlight: "His process and insights really made an impact for us.",
  },
]

export const navigation = [
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: siteConfig.resumeUrl, external: true },
  { name: 'Contact', href: '/contact' },
]
