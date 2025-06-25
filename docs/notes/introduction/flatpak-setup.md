---
title: Flatpak Setup
createTime: 2025/06/14 15:58:37
permalink: /introduction/flatpak-setup/
---

## Set up Flathub

You might need to set up Flatpak on your distro before you can start installing them. If you haven’t set up Flathub (the biggest Flatpak repository) on your computer, use the commands below or check [here](https://flathub.org/setup).

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

@tab ::devicon:archlinux:: Arch

```bash
sudo pacman -S flatpak
```

@tab ::devicon:debian:: Debian

```bash
sudo apt install flatpak

sudo apt install gnome-software-plugin-flatpak

sudo apt install plasma-discover-backend-flatpak

flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

@tab ::devicon:ubuntu:: Ubuntu

```bash
flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo

sudo apt install gnome-software-plugin-flatpak

flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

:::

If you want to also have the option to install Flathub packages on a per-user basis (other users of your computer won’t see those apps when they log in), you can add the Flathub repository for your user by running this line.

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

:::
