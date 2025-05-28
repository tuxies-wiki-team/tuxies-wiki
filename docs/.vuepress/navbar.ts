/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog/" },
  { text: "Tags", link: "/blog/tags/" },
  { text: "Archives", link: "/blog/archives/" },
  {
    text: "Notes",
    items: [{ text: "Demo", link: "/notes/demo/README.md" }],
  },
]);
