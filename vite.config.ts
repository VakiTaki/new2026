import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1/": {
        target: "http://37.46.134.70:9393/",
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5173,
  },
});
