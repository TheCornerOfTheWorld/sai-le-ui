import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { MarkdownTransform } from "./.vitepress/plugin/markdownTransform";
import Inspect from "vite-plugin-inspect";
import Components from "unplugin-vue-components/vite"; // On-demand components auto importing for Vue.
import IconsResolver from "unplugin-icons/resolver";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    MarkdownTransform(),
    Inspect(),
    Components({
      dirs: resolve(__dirname, ".vitepress/theme/components"),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
      dts: "./.vitepress/components.d.ts",
      transformer: "vue3",
    }),
  ],
  server: {},
  resolve: {
    alias: {
      "@SaiLe/core": resolve(__dirname, "core"),
      "@SaiLe/utils": resolve(__dirname, "utils"),
    },
  },
});
