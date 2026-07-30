import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});