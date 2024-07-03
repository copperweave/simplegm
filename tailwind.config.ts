import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Veranda", "Tahoma", "Arial"], // ADA Accessible fonts
        "open-dyslexic": ["Open Dyslexic"], // More experiment accessible font
        "pathfinder-icons": ["Pathfinder Icons"] // Turn certain strings into Pathfinder Diamonds
      }
    },
  },
  plugins: [],
};
export default config;