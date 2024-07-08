
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
        saira: ['"Saira Stencil One"', 'sans-serif'],
      },
      backgroundColor: {
        bgsite: '#f0f0f5',
        bginput: '#F3F5F6',
      },
      colors: {
        LogoColor: '#5D5D6D',
        Filtercolor: '#787880',
      },
    },
  },
  plugins: [],
};

export default config;
