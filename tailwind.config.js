/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake","synthwave"],
  },
};
