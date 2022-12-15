/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "40rem",
    },
    spacing: {
      0: "0",
      0.25: "0.25rem",
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      3: "3rem",
      3: "3rem",
      6: "6rem",
      8: "8rem",
      12: "12rem",
      16: "16rem",
      24: "24rem",
      32: "32rem",
      40: "40rem",
      48: "48rem",
    },
    colors: {
      blue: {
        marine: "hsl(213, 96%, 18%)",
        purplish: "hsl(243, 100%, 62%)",
        pastel: "hsl(228, 100%, 84%)",
        light: "hsl(206, 94%, 87%)",
      },
      red: "hsl(354, 84%, 57%)",
      gray: {
        cool: "hsl(231, 11%, 63%)",
        light: "hsl(229, 24%, 87%)",
      },
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "clamp(1.50rem, calc(1.18rem + 1.37vw), 2.00rem)",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    backgroundImage: {
      sidebarDesktop: "url(./images/bg-sidebar-desktop.svg)",
      sidebarMobile: "url(./images/bg-sidebar-mobile.svg)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
