import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      includeAssets: [
        "favicon.svg",
        "images/apple-touch-icon.png",
        "images/android-chrome-192x192.png",
        "images/android-chrome-512x512.png",
      ],
      manifestFilename: "site.webmanifest",
      manifest: {
        name: "FrappéLiz — Restaurante/Cafetería",
        short_name: "FrappéLiz",
        description:
          "Comida, frappés y desayunos sorpresa en Cuautepec, Guerrero.",
        start_url: "/",
        display: "standalone",
        background_color: "#fdf6f0",
        theme_color: "#7c4a31",
        lang: "es-MX",
        icons: [
          {
            src: "/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpeg,jpg}"],
      },
    }),
  ],
});
