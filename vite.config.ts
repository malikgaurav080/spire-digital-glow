import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = process.env.BASE_PATH || "/profile/";

export default defineConfig({
  base: basePath,
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        filter: (page) => !page.path.includes(".") || page.path.endsWith(".html"),
      },
      router: {
        basepath: basePath === "/" ? undefined : basePath,
      },
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-start",
      "@tanstack/react-router",
      "@tanstack/react-query",
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
        },
      },
    },
  },
});
