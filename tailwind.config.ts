import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F99417',
        'secondary': '#30475E',
        'light': '#E8E8E8',
        'dark': '#222831'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
