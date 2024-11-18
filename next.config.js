/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // Mantém o App Router ativo
  },
  output: 'export', // Garante que o Next.js gere arquivos estáticos
  images: {
    unoptimized: true, // Necessário para exportação estática (desativa a otimização de imagens do Next.js)
  },
};

module.exports = nextConfig;

