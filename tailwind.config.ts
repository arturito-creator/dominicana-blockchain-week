import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        handwritten: ['Just Me Again Down Here', 'cursive'],
      },
      colors: {
        // Brand colors
        "dbw-blue": {
          dark: "#001d66",
          DEFAULT: "#00377c",
          light: "#004a9e",
        },
        "dbw-red": {
          dark: "#8c0305",
          DEFAULT: "#b80c11",
          light: "#d40e14",
        },
        "dbw-gray": {
          light: "#d9d9d9",
          DEFAULT: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-dbw": "linear-gradient(to bottom, #001d66, #00377c)",
      },
    },
  },
  plugins: [],
};
export default config;

