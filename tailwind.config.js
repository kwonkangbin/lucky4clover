/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      green: {
        1: "#59B76A",
        2: "#7AC588",
        3: "#9BD4A6",
        4: "#BDE2C3",
        5: "#DEF1E1",
      },
      black: {
        1: "#1B1B1B",
        2: "#494949",
        3: "#767676",
        4: "#A4A4A4",
        5: "#D1D1D1",
        6: "#AAAAAA",
        7: "#000000",
      },
      white: "#FFFFFF",
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
