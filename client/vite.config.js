import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // عشان GitHub Pages
  base: "./",

  // عشان ngrok
  server: {
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
});
