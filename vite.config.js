import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: deploy `dist/` via GitHub Actions (see .github/workflows/pages.yml) or copy to hosting.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
