# Paul Taylor Portfolio

A Next.js portfolio website built with TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### 1. Add your images

Place your downloaded images from Framer in the `public/images/` directory:

```
public/images/
├── profile.png              # Your profile photo
├── allergytracker-thumb.png # AllergyTracker thumbnail
├── allergytracker-1.png     # Additional AllergyTracker images
├── allergytracker-2.png
├── jetsweat-thumb.png       # JetSweat thumbnail
├── jetsweat-1.png           # Additional JetSweat images
├── testimonial-alex.png     # Testimonial headshots
├── testimonial-joella.png
├── testimonial-kim.png
└── testimonial-alexandra.png
```

Use the `manifest.json` from the download script to map the original URLs to your renamed files.

### 2. Update content

Edit `src/data/content.ts` to update:
- Your bio and current role
- Project details and descriptions
- Testimonials
- Navigation links

### 3. Install dependencies

```bash
npm install
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Add case study content

Edit `src/app/[slug]/page.tsx` to add your full case study content, or convert to MDX for easier content management.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Homepage
│   ├── about/page.tsx   # About page
│   ├── contact/page.tsx # Contact page
│   └── [slug]/page.tsx  # Dynamic case study pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── TestimonialCarousel.tsx
└── data/
    └── content.ts       # Site content and data
```

## Customization

- **Colors**: Edit the theme variables in `src/app/globals.css`
- **Fonts**: Change the font in `src/app/layout.tsx` (currently using Inter)
- **Animations**: Framer Motion is set up - customize transitions in components

## Notes

- Images use Next.js Image component for optimization
- Site is fully responsive
- Testimonial carousel has manual navigation
- Contact page has a commented-out form you can enable
