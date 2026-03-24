# Sulfur Springs Land Management - Quick Start Guide

## Installation (5 minutes)

```bash
# Navigate to project directory
cd /sessions/adoring-trusting-feynman/mnt/Documents/clm-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure

```
clm-website/
├── app/page.tsx              # Main landing page (complete, single-page site)
├── app/layout.tsx            # App layout with SEO metadata
├── app/globals.css           # Global styles and animations
├── app/icon.svg              # Favicon
├── app/privacy/page.tsx       # Privacy Policy
├── app/terms/page.tsx         # Terms of Service
├── tailwind.config.js         # Color palette (earth tones, sage green)
├── package.json               # Dependencies
└── [config files]             # TypeScript, ESLint, Vercel, etc.
```

## Page Sections (All on Home Page)

1. **Navigation** - Fixed top nav with logo, links, mobile menu, CTA
2. **Hero** - Main headline, veteran badge, CTA buttons
3. **Services** - 6-card grid (land clearing, grading, trenching, debris, solar, water)
4. **Off-Grid Specialists** - Callout section with stats
5. **Solar & Water** - Detailed two-column layout with checklists
6. **How It Works** - 3-step process
7. **About** - Company story
8. **Coverage Area** - Service radius and equipment delivery
9. **Contact Form** - Free estimate request form
10. **Footer** - Links, contact, legal pages, veteran badge

## Key Features

- ✅ Complete production-ready code (no truncation)
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations (Framer Motion)
- ✅ Earth-tone color scheme (brown, sage green, cream)
- ✅ Veteran-owned branding throughout
- ✅ No specific equipment mentioned
- ✅ Form with validation and success message
- ✅ Mobile hamburger menu
- ✅ SEO optimized
- ✅ Legal pages (Privacy Policy, Terms of Service)

## Customization

### Update Contact Information
Edit `app/page.tsx`:
- Line ~600: Phone number in contact methods
- Line ~640: Email address
- Update footer contact info (bottom of file)

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  bg: '#1A1510',           // Dark brown
  accent: '#7C9A3E',       // Sage green
  // ... other colors
}
```

### Add New Services
Edit `app/page.tsx` services array:
```javascript
const services = [
  {
    icon: YourIcon,
    title: 'Service Name',
    description: 'Service description...',
  },
  // ... add more
];
```

## Building for Production

```bash
# Build the site
npm run build

# Start production server locally
npm start

# Deploy to Vercel (recommended)
# Push to GitHub, Vercel auto-deploys
```

## Form Submission Setup

The contact form currently logs to browser console. To enable actual submissions:

### Option A: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Get form ID
4. In `app/page.tsx`, add to form submit:

```javascript
const response = await fetch(
  'https://formspree.io/f/YOUR_FORM_ID',
  {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  }
);
```

### Option B: Vercel Functions
Create `/api/contact.js`:
```javascript
export default async function handler(req, res) {
  // Handle form submission
  // Send email
  // Return response
}
```

### Option C: Other Services
- Firebase
- Supabase
- SendGrid
- Custom backend

## Scripts

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Build for production
npm start         # Start prod server
npm run lint      # Run ESLint
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images will be optimized automatically with Next.js
- Tailwind CSS purges unused styles automatically
- Animations use GPU acceleration
- Framer Motion code-splits automatically

## SEO Basics

Already configured:
- Meta title and description
- Open Graph tags
- Mobile viewport settings
- Semantic HTML structure
- Proper heading hierarchy

Add these for more SEO:
- Google Search Console verification
- Sitemap.xml
- robots.txt
- Schema markup
- Analytics tracking

## Deployment to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click "Deploy"
5. Done! HTTPS automatic, CDN global

## Environment Variables

None required for basic functionality.

For form handling, you may need:
- FORMSPREE_ID (if using Formspree)
- SMTP credentials (if sending emails)
- etc.

## Getting Help

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Vercel Deployment**: https://vercel.com/docs

## Project Statistics

- **Main Page**: 802 lines of TypeScript/JSX
- **Privacy Policy**: 201 lines
- **Terms of Service**: 319 lines
- **Total Code**: ~1,300 lines
- **Project Size**: ~116 KB (uncompressed)
- **No external images**: Uses Lucide icons only

## Next Steps

1. Update contact information (phone, email)
2. Configure form submission backend
3. Test on mobile devices
4. Deploy to Vercel
5. Set up analytics
6. Monitor performance

---

**Version**: 1.0.0
**Created**: March 20, 2026
**Project**: Sulfur Springs Land Management Website
