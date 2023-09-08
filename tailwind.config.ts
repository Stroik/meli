import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFE600",
        "dark-gray": "#333333",
        "medium-gray": "#666666",
        gray: "#999999",
        "light-gray": "#EEEEEE",
        blue: "#3483FA",
      },
      fontFamily: {
        sans: [
          "Proxima Nova",
          "-apple-system",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "7rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
