/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        otomanopee: ['"Otomanopee One"', "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
        serif: ["M PLUS 1", "serif"],      },
    },
    screens: {
      xs: "320px", // Extra small screens and up
      sm: "660px", // Small screens and up
      md: "768px", // Medium screens and up
      lg: "1024px", // Large screens and up
      xl: "1250px", // Extra large screens and up
      "2xl": "1440px", // 2 Extra large screens and up
      "3xl": "1800px", // 3 Extra large screens and up
      "4xl": "2500px", // 4 Extra large screens and up

    },
  },
  plugins: [require("tailwindcss-animated")],
  corePlugins: {},
};


