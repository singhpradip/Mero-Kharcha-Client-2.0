import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./src/hooks"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      routes: path.resolve(__dirname, "./src/routes"),
      pages: path.resolve(__dirname, "./src/pages"),
      utils: path.resolve(__dirname, "./src/utils"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});
