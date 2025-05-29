/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  { text: "Posts", link: "/blog/" },
  { text: "Tags", link: "/blog/tags/" },
  { text: "Categories", link: "/blog/categories/" },
  { text: "Archives (All Posts)", link: "/blog/archives/" },
  // {
  //   text: "Linux Guides",
  //   items: [{ text: "About Linux Guides", link: "/linux-guides/" }],
  // },
]);
