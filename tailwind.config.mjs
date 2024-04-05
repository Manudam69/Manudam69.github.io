/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        desktop: "1600px",
        laptop: "1200px",
        tablet: "760px",
        smartphone: "480px",
      },
    },
  },
  plugins: [],
};
