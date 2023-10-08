import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 8081,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 80,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
