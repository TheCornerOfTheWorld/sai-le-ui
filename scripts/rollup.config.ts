import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import typescript from "rollup-plugin-typescript2";
import { defineConfig } from "rollup";

import dartSass from "sass";

const input = "packages/core/index.ts";
const overrides = {
  compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
  exclude: [
    // 排除项
    "node_modules",
  ],
};
export default defineConfig([
  {
    input,
    output: [
      { file: "dist/lib/sai-le.cjs", format: "cjs" },
      { file: "dist/lib/sai-le.mjs", format: "es" },
    ],
    plugins: [
      scss({ include: /\.scss$/, sass: dartSass }),
      typescript({ tsconfigOverride: overrides }),
      esbuild({
        include: /\.[jt]s$/,
        minify: process.env.NODE_ENV === "production",
        target: "es2015",
      }),
      vue({
        include: /\.vue$/,
      }),
    ],
    external: ["vue-demi", "vue"],
  },
]);
