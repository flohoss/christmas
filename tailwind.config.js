/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#C8D20A",
          secondary: "#5F5F5F",
          error: "#dc2828",
          success: "#C8D20A",
          "base-100": "#dadada",
        },
      },
      {
        myDark: {
          primary: "#C8D20A",
          secondary: "#5F5F5F",
          error: "#dc2828",
          success: "#C8D20A",
          "base-100": "#212121",
        },
      },
    ],
    darkTheme: "myDark",
  },
};
