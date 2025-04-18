// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  
  site: "https://elpensadero.vercel.app",
  integrations: [react(), tailwind(),mdx(),sitemap() ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true, 
    },
  }),
  
});
