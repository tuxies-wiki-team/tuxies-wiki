import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const linuxApps = defineNoteConfig({
  dir: "linux-apps",
  link: "/linux-apps",
  sidebar: "auto",
});

const linuxGuides = defineNoteConfig({
  dir: "linux-guides",
  link: "/linux-guides",
  sidebar: "auto",
});

// const about = defineNoteConfig({
//   dir: "about",
//   link: "/about",
//   sidebar: "auto",
// });

export const enNotes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [linuxApps, linuxGuides],
});
