/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  { text: "📰 Articles", link: "/blog/" },
  {
    text: "📂 Categories",
    items: [
      { text: "Linux Apps Library", link: "/linux-apps/" },
      { text: "Linux Guides", link: "/linux-guides/" },
    ],
  },
  { text: "🔍 Sort", link: "/blog/tags/" },
]);
