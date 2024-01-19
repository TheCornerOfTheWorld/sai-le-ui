import { defineConfig } from "vitepress";

export default defineConfig({
  title: "SaiLe Ui 组件",
  description: "'塞雷'的组件库",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Introduction", link: "/core/start" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [{ text: "安装", link: "/core/start" }],
      },
      {
        text: "介绍",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Button", link: "/core/Button/index" },
          { text: "Input", link: "/core/Input/index" },
          { text: "Select", link: "/core/Select/index" },
          // { text: "Collapse", link: "/core/Collapse/index" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
