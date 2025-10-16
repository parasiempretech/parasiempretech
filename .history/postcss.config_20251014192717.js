// postcss.config.js (Tailwind v4 compatible)

import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// ⚠️ Tenés que asignarlo a una constante y exportarlo después
const config = {
  plugins: [tailwindcss(), autoprefixer()],
};

export default config;
