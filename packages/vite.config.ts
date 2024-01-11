import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS()],
  server: {},
  resolve: {
    alias: {
      "@vueuse/core": resolve(__dirname, "core/index.ts"),
    },
  },
});
