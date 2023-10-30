/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      gray: {
        100: "#121222",
        200: "#262636",
        300: "#4E4E5E",
        400: "#9494A4",
        500: "#BCBCCC",
        600: "#ECECF0",
        700: "#FFFFFF",
      },
      primary: {
        100: "#FFE7EE",
        300: "#E93073",
        400: "#DF2669",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    font: {
      headline: {
        1: "text-28 leading-44 font-bold",
        2: "text-24 leading-40 font-bold",
        3: "text-20 leading-32 font-bold",
        4: "text-20 leading-32 font-semibold",
        5: "text-17 leading-28 font-bold",
        6: "text-17 leading-28 font-semibold",
      },
      body: {
        1: "text-15 leading-24 font-semibold",
        2: "text-15 leading-24 font-medium",
        3: "text-13 leading-20 font-semibold",
        4: "text-13 leading-20 font-medium",
      },
    },
  },
  plugins: [],
};
