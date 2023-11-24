import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "main-dark": "#423D60",
        "main-dark": "#00001a",
        // primary: "#181823",
        primary: "#000000",
        secondary: "#94a3b8",
        "error-primary": "#ef4444",
        "btn-primary": "#00898B",
      },
      fontFamily: {
        robot: ["Quantico", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
      },
    },
  },
  plugins: [],
};
export default config;
