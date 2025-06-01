/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger? */

  theme: {
    // overwrite indstillinger her
    extend: {
      // extend indstillinger her
      /* Tilføj din egen farvepalette nedenfor */
      // colors: {
      //   transparent: "transparent",
      //   current: "currentColor",
      //   brun: {
      //     0: "#FFFFFF",
      //     25: "#FAF9F8",
      //     50: "#F6F1EF",
      //     100: "#ECE3DF",
      //     200: "#DBC9C2",
      //     300: "#C8ADA2",
      //     400: "#B79485",
      //     500: "#A57865",
      //     600: "#87604F",
      //     700: "#64473A",
      //     800: "#443028",
      //     900: "#201713",
      //   },
      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //   outfit: ["outfit", "sans-serif"],
      //   agrandir: ["agrandir", "sans-serif"],
      // },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //   default: "0",
      //   2: "2px",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
