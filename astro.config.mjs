import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
    },
    preview: {
      host: true,
      allowedHosts: ["codeviking.io", ".railway.app"],
    },
  },
});
