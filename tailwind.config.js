/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/bg.webp')", // path to the image in the public folder
      },
      screens: {
        sm: "480px",
        md: "768px",
        ml: "940px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        col1: "#1A1A1A",
        col2: "#D9A16F",
        col3: "#1E1E1E",
        col4: "#e0b999",
      },
    },
  },
  plugins: [],
};
