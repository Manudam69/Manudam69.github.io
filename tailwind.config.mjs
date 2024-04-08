/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#13151a',
        secondary: "#f1f1f1"
      },
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
