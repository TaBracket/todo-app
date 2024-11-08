/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      light: {
        surface: {
          1: "#fefffe",
          2: "#d6d7db",
          3: "#75787d",
          4: "#000",
        },
        element: {
          primary: "#199beb",
          secondary: "#ff5f45",
          tertiary: "#97ce1e",
          error: "#d30056",
        },
        text: {
          1: "#050404",
          2: "#fefffe",
        },
      },
      dark: {
        surface: {
          1: "#111111",
          2: "#232323",
          3: "#464646",
          4: "#7a7a7a",
        },
        element: {
          primary: "#a2d2ff",
          secondary: "#f4978e",
          tertiary: "#b9fbc0",
          error: "#d90429",
        },
        text: {
          1: "#050404",
          2: "#edf2f4",
        },
      },
    },
  },
  plugins: [],
};
