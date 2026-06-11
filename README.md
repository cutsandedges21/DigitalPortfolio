# Digital Portfolio

A personal portfolio website built with **Next.js 16, React 19, Tailwind CSS v4**, an animated
WebGL hero (`three` / `@react-three/fiber`), and Framer Motion. Dark, modern theme with a warm
orange accent.

## Run it locally

```bash
npm install      # already done if you cloned with node_modules
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## ✏️ Editing your content (start here)

**Almost everything lives in one file: [`lib/data.ts`](lib/data.ts).** Open it and edit the text.
The whole site updates automatically. Things to replace (search for `// TODO`):

| What | Where |
|------|-------|
| Your **name**, role, headline, tagline | `profile` in `lib/data.ts` |
| Your **LinkedIn URL** | `profile.linkedinUrl` |
| The **3 projects** (titles, descriptions, tech, links) | `projects` array in `lib/data.ts` |
| **Project screenshots** | replace the SVGs in `public/images/` (keep the same filenames, or update the paths in `lib/data.ts`) |
| Your **resume PDF** | replace `public/resume.pdf` with your real file |
| Experience / skills / certifications / education | the matching arrays in `lib/data.ts` (already filled from your resume) |

### Project images

Each project uses two images:

- **Web project** → `project-web-1.svg`, `project-web-2.svg` (landscape screenshots look best)
- **Mobile App #1** → `project-app1-1.svg`, `project-app1-2.svg` (portrait / phone screenshots)
- **Mobile App #2** → `project-app2-1.svg`, `project-app2-2.svg`

Drop in PNG/JPG instead and update the filenames in `lib/data.ts` (e.g. `/images/app1.png`).

## 📨 Contact form

The contact form works out of the box as a **mailto** fallback. To collect submissions in your
inbox without a backend:

1. Create a free form at [formspree.io](https://formspree.io).
2. Paste your endpoint into `siteConfig.formspreeEndpoint` in `lib/data.ts`
   (e.g. `"https://formspree.io/f/abcdwxyz"`).

## 🎨 Changing the accent color

Edit `--accent` (and `--primary` / `--ring`) at the top of [`app/globals.css`](app/globals.css).
One change re-skins the whole site.

## 🚀 Deploy to Vercel (get your live resume link)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**.
   No configuration needed — Vercel detects Next.js automatically.
3. You'll get a live URL like `your-name.vercel.app`. Put **that link** in the PROJECTS
   section of your resume.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Optional: add a custom domain in your Vercel project settings.

## Project structure

```
app/
  layout.tsx                  fonts, SEO metadata
  page.tsx                    homepage (composes all sections)
  projects/[slug]/page.tsx    project detail pages
  globals.css                 theme tokens + accent color
components/
  sections/                   Hero, About, Projects, Experience, Skills, Certifications, Education, Contact
  three/ShaderEffects.tsx     WebGL shader plane + energy ring
  HeroCanvas.tsx              r3f <Canvas> backdrop
  SectionWithMockup.tsx       phone-mockup project layout
  DisplayCards.tsx            stacked certification cards
  Nav.tsx, Footer.tsx, Reveal.tsx, SectionHeading.tsx
lib/
  data.ts                     ← all your content
  utils.ts                    cn() helper
public/
  images/                     project screenshots (placeholders)
  resume.pdf                  your resume (placeholder)
```
