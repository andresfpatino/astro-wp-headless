import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import react from "@astrojs/react";
const { PUBLIC_WP_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  image: {
    domains: [PUBLIC_WP_URL]
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()]
});