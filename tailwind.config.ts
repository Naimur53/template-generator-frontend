import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        lightCyan: "#0D0D26",

        "error-primary": "#ef4444",
        "btn-primary": "#00898B",
      },
      fontFamily: {
        robot: ["Quantico", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
      },
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "16px",
    //     lg: "20px",
    //     "2xl": "90px",
    //   },
    // },
  },
  plugins: [],
};
export default config;
