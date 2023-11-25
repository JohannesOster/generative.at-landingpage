/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Mona-Sans",
    },
    extend: {
      colors: {
        text: {
          default: "#040404",
          secondary: "#757575",
        },
        surface: {
          subdued: "#F4F4FB",
        },
        primary: "#FF5A00",
      },
    },
  },
  plugins: [],
};
