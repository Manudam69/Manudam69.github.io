/** @type {import('tailwindcss').Config} */
function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: withOpacity("--color-bg"),
        surface: withOpacity("--color-surface"),
        "surface-2": withOpacity("--color-surface-2"),
        ink: withOpacity("--color-text"),
        muted: withOpacity("--color-text-secondary"),
        line: withOpacity("--color-border"),
        "line-light": withOpacity("--color-border-light"),
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          hover: withOpacity("--color-accent-hover"),
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
        script: ["Satisfy", "cursive"],
      },
      maxWidth: {
        content: "var(--container-max)",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.35)",
        elevated: "0 16px 40px -16px rgba(0, 0, 0, 0.55)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
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
