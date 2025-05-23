/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project
  ],
  theme: [
    {
        light: {
            primary: "#570df8",
            secondary: "#f000b8",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            info: "#3abff8",
            success: "#36d399",
            warning: "#fbbd23",
            error: "#f87272",
          },
    },
    {
        dark: {
        primary: "#793ef9",
        secondary: "#f000b8",
        accent: "#37cdbe",
        neutral: "#2a2e37",
        "base-100": "#1d232a",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#f87272",
      },

    }
  ],
  plugins: [daisyui], // Add DaisyUI plugin here
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"], // Customize your themes
  },
};
