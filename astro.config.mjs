import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import react from "@astrojs/react";
const {
  IMAGE_DOMAIN
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  image: {
    domains: [IMAGE_DOMAIN]
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()]
});