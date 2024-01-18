import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
