/** @type {import('tailwindcss').Config} */
export default {
  // Arquivos monitorados pelo Tailwind para geração das classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /**
       * Paleta institucional centralizada.
       * Usar sempre essas cores para evitar valores hardcoded no projeto.
       */
      colors: {
        brand: {
          dark: "#1a1a1a",
          slate: "#333846",
          navy: "#1c2846",
          light: "#d6d6d6",
          white: "#ffffff",
          dark: "#1F6F5C",
          light: "#4FAF95",
        },
      },

      /**
       * Tokens semânticos de fundo.
       * Facilitam troca de identidade visual e criação de temas.
       */
      backgroundColor: {
        page: "#ffffff",
        card: "#ffffff",
        subtle: "#f7f7f7",
        brand: "#1F6F5C",
        brandSoft: "#4FAF95",
      },

      /**
       * Bordas padronizadas para manter consistência visual.
       */
      borderColor: {
        DEFAULT: "#d6d6d6",
        light: "#d6d6d6",
        dark: "#333846",
        brand: "#1F6F5C",
        brandSoft: "#4FAF95",
      },

      /**
       * Cores de texto baseadas em hierarquia semântica,
       * evitando uso direto de valores hex no código.
       */
      textColor: {
        heading: "#1c2846",
        body: "#333846",
        subtle: "#1a1a1a",
        brand: "#1F6F5C",
        brandSoft: "#4FAF95",
      },
    },
  },

  plugins: [],
};
