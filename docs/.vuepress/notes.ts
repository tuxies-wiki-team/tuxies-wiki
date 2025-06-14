import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

// const linuxApps = defineNoteConfig({
//   dir: "linux-apps",
//   link: "/linux-apps",
//   sidebar: "auto",
// });

// const linuxGuides = defineNoteConfig({
//   dir: "linux-guides",
//   link: "/linux-guides",
//   sidebar: "auto",
// });

// const about = defineNoteConfig({
//   dir: "about",
//   link: "/about",
//   sidebar: "auto",
// });

// const contributions = defineNoteConfig({
//   dir: "about/contributions",
//   link: "/contributions",
//   sidebar: "auto",
// });

const introduction = defineNoteConfig({
  dir: "introduction",
  link: "/introduction",
  sidebar: [
    {
      text: "New to the Wiki?",
      icon: "mdi:hand-wave",
      link: "/introduction/new-to-the-wiki/",
    },
    {
      text: "Linux Vocabs",
      icon: "mdi:book-alphabet",
      link: "/introduction/linux-vocabs/",
    },
    {
      text: "Flatpak Setup",
      icon: "mdi:cog",
      link: "/introduction/flatpak-setup/",
    },
  ],
});

export const enNotes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [introduction],
});
