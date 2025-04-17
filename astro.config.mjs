// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://elpensadero.vercel.app",
  integrations: [react(), tailwind(),mdx(),sitemap() ],
  
});
