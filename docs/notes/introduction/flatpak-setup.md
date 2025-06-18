---
title: Flatpak Setup
createTime: 2025/06/14 15:58:37
permalink: /introduction/flatpak-setup/
---

Setting up Flatpak

::::card

You might need to set up Flatpak on your distro before you can start installing them. If you haven’t set up Flatpak on your computer, check [here](https://flathub.org/setup).

If you want to also have the option to install Flatpaks on a per-user basis (other users of your computer won’t see those apps when they log in), you can add the Flathub repository for your user by running this line.

```bash
flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

::::
