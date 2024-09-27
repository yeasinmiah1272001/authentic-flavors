/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bannerBg: "#115061",
      },
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
