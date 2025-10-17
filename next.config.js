/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode ayuda a detectar problemas potenciales en el desarrollo.
  reactStrictMode: true,

  // Hemos eliminado la sección 'experimental' ya que 'appDir: true'
  // ya no es una opción válida en esa ubicación para versiones modernas de Next.js.
  // El modo 'app' se habilitará automáticamente si detecta la carpeta 'app'.
};

module.exports = nextConfig;
