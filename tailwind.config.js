/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1a1a1a",     // preto grafite
          slate: "#333846",    // cinza/azul escuro
          navy: "#1c2846",     // azul marinho institucional
          light: "#d6d6d6",    // cinza claro
          white: "#ffffff",    // branco
        },
      },

      backgroundColor: {
        page: "#ffffff",
        card: "#ffffff",
        subtle: "#f7f7f7",
      },

      borderColor: {
        DEFAULT: "#d6d6d6",
        light: "#d6d6d6",
        dark: "#333846",
      },

      textColor: {
        heading: "#1c2846",
        body: "#333846",
        subtle: "#1a1a1a",
      },
    },
  },

  plugins: [],
};
