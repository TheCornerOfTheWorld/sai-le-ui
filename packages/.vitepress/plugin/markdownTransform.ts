import { join, resolve } from "node:path";
import type { Plugin } from "vite";
import fs from "fs-extra";
const DIR_SRC = resolve(__dirname, "../..");

export function getFunctionMarkdown(pkg: string, name: string) {
  const dirname = join(DIR_SRC, pkg, name);

  const demoPath = ["demo.vue", "demo.client.vue"].find((i) =>
    fs.existsSync(join(dirname, i))
  );
  if (demoPath) {
    // 下面的字符必须要缩进，否则失败
    return `
<script setup>
  import Demo from \'./${demoPath}\'
</script>

## Demo

<DemoContainer>
  <Demo/>
</DemoContainer>
  `;
  }
  return "";
}

export function MarkdownTransform(): Plugin {
  return {
    name: "saile-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.match(/\.md\b/)) {
        return null;
      }
      const [pkg, _name, i] = id.split("/").slice(-3);
      if (i === "index.md") {
        const frontmatterEnds = code.indexOf("---\n\n");
        const firstHeader = code.search(/\n#{2,6}\s.+/);
        const sliceIndex =
          firstHeader < 0
            ? frontmatterEnds < 0
              ? 0
              : frontmatterEnds + 4
            : firstHeader;
        const header = getFunctionMarkdown(pkg, _name);
        code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex);
      }
      return code;
    },
  };
}
