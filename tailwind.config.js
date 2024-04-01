/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0EBBBC",
          secondary: "#07133D",
          neutral: "#151531",
          accent: "#929292",
          info: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
