/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      opensans: ["OpenSans", "sans-serif"],
      squartiqa: ["Squartiqa4FStrike", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "hsl(49, 100%, 96%)",
          200: "hsl(48, 100%, 88%)",
          300: "hsl(48, 95%, 76%)",
          400: "hsl(48, 94%, 68%)",
          500: "hsl(44, 92%, 63%)",
          600: "hsl(42, 87%, 55%)",
          700: "hsl(36, 77%, 49%)",
          800: "hsl(29, 80%, 44%)",
          900: "hsl(22, 82%, 39%)",
          1000: "hsl(15, 86%, 30%)",
        },
        neutral: {
          100: "hsl(0, 0%, 97%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 81%)",
          400: "hsl(0, 0%, 69%)",
          500: "hsl(0, 0%, 62%)",
          600: "hsl(0, 0%, 49%)",
          700: "hsl(0, 0%, 38%)",
          800: "hsl(0, 0%, 23%)",
          900: "hsl(0, 0%, 13%)",
          1000: "hsl(0, 0%, 1.2%)",
        },
        red: {
          100: "hsl(360, 100%, 95%)",
          200: "hsl(360, 100%, 87%)",
          300: "hsl(360, 100%, 80%)",
          400: "hsl(360, 91%, 69%)",
          500: "hsl(360, 83%, 62%)",
          600: "hsl(356, 75%, 53%)",
          700: "hsl(354, 85%, 44%)",
          800: "hsl(352, 90%, 35%)",
          900: "hsl(350, 94%, 28%)",
          1000: "hsl(348, 94%, 20%)",
        },
        green: {
          100: "hsl(165, 67%, 96%)",
          200: "hsl(163, 75%, 87%)",
          300: "hsl(162, 73%, 74%)",
          400: "hsl(164, 70%, 63%)",
          500: "hsl(166, 64%, 49%)",
          600: "hsl(168, 78%, 41%)",
          700: "hsl(170, 91%, 32%)",
          800: "hsl(172, 94%, 26%)",
          900: "hsl(172, 98%, 20%)",
          1000: "hsl(176, 100%, 13%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "photo-spin": "photo-spin 2s 1 linear forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "photo-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        // Custom Screen styles
        "3xl": "2000px",
        xs: "480px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
