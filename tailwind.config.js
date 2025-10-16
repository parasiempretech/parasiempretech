/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // escanea todo dentro de src
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: "#39ff14",
        celeste: "#00bfff",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
