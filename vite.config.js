import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Activa PWA en desarrollo
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, 
        
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: "POS-Beauty-With-Meli",
        short_name: "POS-BWM",
        description: "Sistema POS web pwa",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "minimal-ui",
        icons: [
          {
            src: "./public/imgLogo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./public/imgLogo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

    }),
  ],
});
