import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: "https://susc.kr",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
});