import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Кардинально важно: включает генерацию статических HTML-файлов
  images: {
    unoptimized: true, // Обязательно для github.io, иначе билд упадет на компонентах картинок
  },
};

export default nextConfig;
