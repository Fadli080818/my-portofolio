/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      listStyleType: {
        square: "square",
      },
    },
    extend: {
      screens: {
        // sm: "265px",
      },

      colors: {
        bgColor: "#F1F3F0",
      },
    },
  },
  plugins: [],
};
