import { fileURLToPath } from "node:url";
import * as path from "node:path"; // Changed to namespace import
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replicate __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      // This allows you to use '@/' for your src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});