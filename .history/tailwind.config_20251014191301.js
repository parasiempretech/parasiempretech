/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Escanea todo el código dentro de /src
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        verde: "var(--verde)",
        celeste: "var(--celeste)",
      },
    },
  },
  plugins: [],
};
