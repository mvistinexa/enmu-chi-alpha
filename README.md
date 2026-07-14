# ENMU Chi Alpha Website

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), following the
project style guide (Sagebrush + Clay palette, Playfair Display + Karla).

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (v18 or later) installed — sounds like you already have it.

```bash
# from inside the enmu-chi-alpha folder
npm install
npm run dev
```

Then open **http://localhost:4321** in your browser. The page live-reloads as you edit files.

Other commands:

```bash
npm run build    # builds the production site into /dist
npm run preview  # locally preview the production build
```

## 2. Things marked TODO

Search the project for `TODO` — these are placeholders that need real content before launch:

- **Hero background** (`src/pages/index.astro`) — currently a green/sage gradient. Replace with a
  full-bleed photo or short video of real students/events (your style guide's #1 recommendation).
- **Meeting day/time/location** — appears in the homepage "key info" card and in the footer.
- **Contact email & Instagram link** — in `src/components/Footer.astro`.
- **Photo placeholders** — the "Photo coming soon" blocks throughout the homepage. Drop real
  images into `public/images/` and swap the placeholder `<div>` blocks for `<img>` tags.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial homepage"
```

Then create a new empty repository on [github.com/new](https://github.com/new) (don't initialize it
with a README — you already have one), and follow GitHub's instructions to push an existing
repository, which will look like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/enmu-chi-alpha.git
git branch -M main
git push -u origin main
```

## 4. Deploy on Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select your `enmu-chi-alpha` repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare will give you a free `*.pages.dev` URL immediately, and
   will redeploy automatically every time you push to `main`.

## 5. Connect your custom domain

Once you've registered your domain (Cloudflare Registrar keeps it in the same dashboard, which
makes this step automatic):

1. In your Pages project, go to **Custom domains → Set up a custom domain**.
2. Enter your domain and follow the prompts — if it's already on Cloudflare, DNS records are added
   for you automatically.
3. Update `site` in `astro.config.mjs` to match your final domain.

## Project structure

```
src/
  layouts/
    Layout.astro       # shared <head>, header, footer wrapper
  components/
    Header.astro        # nav bar + mobile menu
    Footer.astro        # contact info + social links
  pages/
    index.astro          # homepage
  styles/
    global.css           # Tailwind layers + base styles
tailwind.config.mjs       # design tokens (colors, type scale, spacing) from the style guide
```

Design tokens (colors, fonts, spacing, radius) live in `tailwind.config.mjs` — update there once,
and every page/component that uses the token classes (`bg-green`, `text-clay`, `p-md`, etc.)
updates automatically.
