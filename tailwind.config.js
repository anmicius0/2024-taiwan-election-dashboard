/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js,vue}",
    "./components/**/*.{html,js,vue}",
    "./layouts/**/*.{html,js,vue}",
  ],
  important: true,
  theme: {
    theme: {
      colors: {
        primary: "#64EF68",
      },
    },
    fontFamily: {
      sans: ["Oswald"],
      body: ["Oswald"],
    },
  },
  plugins: [],
};
