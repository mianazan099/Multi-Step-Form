/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "32rem",
    },
    spacing: {
      0.25: "4px",
      0.5: "8px",
      0.75: "12px",
      1: "16px",
      1.5: "24px",
      2: "32px",
      3: "48px",
      3: "64px",
      6: "96px",
      8: "128px",
      12: "192px",
      16: "256px",
      24: "384px",
      32: "512px",
      40: "640px",
      48: "768px",
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
      lg: "clamp(1.50rem, calc(1.32rem + 0.75vw), 2.00rem)",
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
