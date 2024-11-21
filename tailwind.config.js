/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        sacramento: ["var(--font-sacramento)"]
      },
      colors: {
        "primary-blue": "#768c99",
        "broken-white": "#ebebeb"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"]
  }
};
