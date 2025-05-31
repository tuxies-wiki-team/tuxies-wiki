---
tags:
  - Linux Apps
title: Essentials
createTime: 2025/05/29 08:29:45
permalink: /linux-apps/essentials/
draft: true
---

<!-- <sub>Go back to [Linux Apps Library](README.md)</sub> -->

## [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal)

GUI to modify Flatpak permissions

:::tabs

@tab Flatpak (System)

```bash:no-line-numbers
flatpak install flathub com.github.tchx84.Flatseal
```

@tab Flatpak (User)

```bash:no-line-numbers
flatpak install --user flathub com.github.tchx84.Flatseal
```

:::

## [Timeshift](https://github.com/linuxmint/timeshift)

Create snapshots of your computer, especially if you use Arch.

::::steps

1. SELinux Compatibility

If you want to use Timeshift with SELinux, you might want to set SELinux mode from “enforcing” to “permissive” to enable proper function among kernel versions.

**Go to the file `/etc/selinux/config`, scroll down and set SELinux to "permissive."**

```bash:no-line-numbers
# SELINUX=enforcing
SELINUX=permissive
```

2. Installation

:::tabs

@tab Debian/Ubuntu

```bash:no-line-numbers
sudo apt-get timeshift
```

@tab Fedora

```bash:no-line-numbers
sudo dnf install timeshift
```

@tab Arch

```bash:no-line-numbers
sudo pacman -S timeshift
```

:::

::::
