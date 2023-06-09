import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/data": {
        target: "http://localhost:8002/data.txt",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/data/, ""),
      },
    },
  },
});
