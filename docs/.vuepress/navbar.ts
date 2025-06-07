/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
  {
    text: "Apps Library",
    icon: "mdi:bookshelf",
    items: [
      {
        text: "About Apps Library",
        icon: "mdi:about-variant",
        link: "/linux-apps/",
      },
      {
        text: "Editor's Choice",
        icon: "material-symbols:editor-choice-rounded",
        link: "/linux-apps/editors-choice/",
      },
      {
        text: "Essentials",
        icon: "material-symbols:label-important-rounded",
        link: "/linux-apps/essentials/",
      },
      {
        text: "Popular",
        icon: "mdi:hot",
        link: "/linux-apps/popular/",
      },
      {
        text: "Gnomie",
        icon: "mdi:gnome",
        link: "/linux-apps/gnomie/",
      },
    ],
  },
  {
    text: "Guides",
    icon: "mdi:school-outline",
    items: [
      {
        text: "About Linux Guides",
        icon: "mdi:about-variant",
        link: "/linux-guides/",
      },
      {
        text: "Distro Guides",
        items: [
          {
            text: "Arch",
            icon: "mdi:arch",
            link: "/linux-guides/arch/",
          },
          {
            text: "Fedora",
            icon: "mdi:fedora",
            link: "/linux-guides/fedora/",
          },
          {
            text: "Debian/Ubuntu",
            icon: "mdi:debian",
            link: "linux-guides/debian-ubuntu/",
          },
        ],
      },
      {
        text: "Desktop Env. Guides",
        items: [
          {
            text: "Gnome",
            icon: "mdi:gnome",
            link: "linux-guides/gnome/",
          },
        ],
      },
    ],
  },
  {
    text: "Other Articles",
    icon: "mdi:newspaper-variant-outline",
    link: "/blog/",
  },
  // {
  //   text: "Sort",
  //   icon: "mdi:sort",
  //   link: "/blog/tags/",
  // },
  {
    text: "About",
    icon: "mdi:about",
    items: [
      {
        text: "About Us",
        icon: "mdi:about-variant",
        link: "/about/",
      },
      {
        text: "Become a Contributor",
        icon: "mdi:book-information-variant",
        link: "/about/become-a-contributor/",
      },
      {
        text: "Our Team",
        icon: "mdi:people-group-outline",
        link: "/about/our-team/",
      },
    ],
  },
]);
