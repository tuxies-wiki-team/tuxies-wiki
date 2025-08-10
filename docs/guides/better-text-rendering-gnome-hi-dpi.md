---
title: Better Text Rendering (Gnome Hi-DPI)
tags:
  - Gnome
createTime: 2025/07/18 20:31:18
permalink: /guides/better-text-rendering-gnome-hi-dpi/
---

```bash
dconf write /org/gnome/desktop/interface/font-antialiasing "'grayscale'"
dconf write /org/gnome/desktop/interface/font-hinting "'slight'"
```

```bash
dconf reset /org/gnome/desktop/interface/font-antialiasing
dconf reset /org/gnome/desktop/interface/font-hinting
```

::::card

:::info Sets font hinting to "slight" and antialiasing to "standard".
:::

:::tabs

@tab ::mdi:terminal:: Append changes (cli)

```bash
dconf write /org/gnome/desktop/interface/font-antialiasing "'grayscale'"
dconf write /org/gnome/desktop/interface/font-hinting "'slight'"
```

@tab ::mdi:puzzle:: Append changes (Gnome Tweaks)

`Fonts` > `Rendering` > `Hinting` **slight** -->

`Fonts` > `Rendering` > `Antialiasing` **Standard Grayscale** -->

@tab ::mdi:reload:: Reset changes (cli)

```bash
dconf reset /org/gnome/desktop/interface/font-antialiasing
dconf reset /org/gnome/desktop/interface/font-hinting
```

:::

![Gnome Tweaks Font Redering Settings](./assets/gnome-tweaks-font-rendering-settings.png)
::::
