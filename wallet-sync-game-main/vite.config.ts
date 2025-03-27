/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["@/components/ui/toaster"],
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: [
      "@/components/ui/toaster",
      "@/components/ui/sonner",
      "@/components/ui/tooltip",
      "@/components/ui/button",
      "@/components/ui/form",
      "@/components/ui/input",
      "@/components/ui/card",
      "@/components/ui/tabs",
      "@/components/ui/alert",
      "@/components/ui/alert-dialog",
      "@/components/ui/select",
      "@/components/ui/badge",
      "@/components/ui/dialog",
      "@/components/ui/label"
    ]
  }
});

