/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // --- Colors: "Sagebrush + Clay" palette ---
      colors: {
        green: {
          DEFAULT: '#046A38', // primary — buttons, links, key accents
          dark: '#035A2F',    // hover state for primary buttons
        },
        clay: '#A85838',      // accent — secondary CTAs, tags, sparing highlights
        sage: '#8A9A7E',      // support — icons, dividers, overlays (NEVER as text on cream)
        cream: '#F5F1E8',     // primary page background
        charcoal: '#3A3530',  // primary text color — the only approved body copy color
      },

      // --- Typography ---
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // headings
        body: ['Karla', 'sans-serif'],             // body copy + UI
      },
      fontSize: {
        // mobile-first sizes; pair with md: variant for desktop size (see type scale below)
        hero: ['30px', { lineHeight: '1.15' }],
        'hero-lg': ['40px', { lineHeight: '1.15' }],
        h2: ['26px', { lineHeight: '1.2' }],
        'h2-lg': ['32px', { lineHeight: '1.2' }],
        h3: ['20px', { lineHeight: '1.25' }],
        'h3-lg': ['24px', { lineHeight: '1.25' }],
        h4: ['18px', { lineHeight: '1.3' }],
        'h4-lg': ['20px', { lineHeight: '1.3' }],
        body: ['16px', { lineHeight: '1.6' }],
        small: ['13px', { lineHeight: '1.5' }],
        'small-lg': ['14px', { lineHeight: '1.5' }],
        btn: ['14px', { lineHeight: '1' }],
      },

      // --- Spacing: 8px-based "Balanced" scale ---
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },

      // --- Corner radius: soft, friendly, not full-pill ---
      borderRadius: {
        brand: '8px',
      },

      maxWidth: {
        prose: '70ch', // keeps paragraph line length in the 60-75 character range
      },
    },
  },
  plugins: [],
};
