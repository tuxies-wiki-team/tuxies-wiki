/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  {
    text: "Linux Apps Library",
    icon: "mdi:bookshelf",
    link: "/linux-apps/",
  },
  {
    text: "Linux Guides",
    icon: "mdi:school-outline",
    link: "/linux-guides/",
  },
  {
    text: "Articles",
    icon: "mdi:newspaper-variant-outline",
    link: "/blog/",
  },
  {
    text: "Sort",
    icon: "mdi:sort",
    link: "/blog/tags/",
  },
]);
