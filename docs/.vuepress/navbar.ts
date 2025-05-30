/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  {
    text: "Articles",
    icon: "ic:baseline-article",
    link: "/blog/",
  },
  {
    text: "Collections",
    icon: "ic:baseline-folder",
    items: [
      {
        text: "Linux Apps Library",
        link: "/notes/linux-apps/",
      },
      {
        text: "Linux Guides",
        link: "/notes/linux-guides/",
      },
    ],
  },
  // {
  //   text: "Sort",
  //   icon: "ic:baseline-sort-by-alpha",
  //   link: "/blog/tags/",
  // },
]);
