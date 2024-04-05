import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://manudam69.github.io/Manudam69/",
  base: "main",
  integrations: [tailwind()],
});
