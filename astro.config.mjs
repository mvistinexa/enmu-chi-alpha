import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // TODO: update once the custom domain is registered
  site: 'https://enmuchialpha.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
