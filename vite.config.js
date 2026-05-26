import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  // Project root directory (where index.html is located).
  root: ".",
  // Base public path when served in development or production.
  base: "/",
  // Directory to serve as plain static assets.
  publicDir: "public",
  // Directory to build output
  build: {
    outDir: "dist",
    // Generate source maps for the build.
    sourcemap: true,
  },
  server: {
    // Specify server port.
    port: 5173,
    // Open browser on server start.
    open: true,
  },
});