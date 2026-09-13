import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Em desenvolvimento, encaminha /api para o backend Node/Express
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true
      }
    }
  }
});
