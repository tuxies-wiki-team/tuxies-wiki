---
tags:
  - Linux Apps
title: Editor's Choice
createTime: 2025/05/22 09:05:08
permalink: /linux-apps/editors-choice/
isBlogPost: true
---

## [Nautilus (File Manager)](https://apps.gnome.org/Nautilus/)

The clean, functional, and blazing fast file manager by Gnome
:::tabs

@tab Debian/Ubuntu

```bash
sudo apt install nautilus
```

@tab Fedora

```bash
sudo dnf install nautilus
```

@tab Arch

```bash
sudo pacman -S nautilus
```

:::

<!-- ## [Spotube](https://flathub.org/apps/com.github.KRTirtho.Spotube)

Spotify/Youtube Music client + downloader
:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub com.github.KRTirtho.Spotube
```

@tab Flatpak (User)

```bash
flatpak install --user flathub dev.vencord.Vesktop
```

::: -->

## [Vesktop](https://flathub.org/apps/dev.vencord.Vesktop)

Discord with screen sharing and audio support, as well as Vencord inbuilt
:::tabs
@tab Flatpak (System)

```bash
flatpak install flathub dev.vencord.Vesktop
```

@tab Flatpak (User)

```bash
flatpak install --user flathub dev.vencord.Vesktop
```

:::

:::tip
If you do not care about Discord Rich Presence (DRP), proceed with the Flatpak installation.

**If you do want DRP, check out [Vesktop’s Github Releases](https://github.com/Vencord/Vesktop/releases) and download the package for your respective distribution.**
:::

## [Waydroid](https://docs.waydro.id/usage/install-on-desktops)

Run Android on Linux!

Find out about installation details on the link above
:::tabs
@tab Debian/Ubuntu

```bash
sudo apt install curl ca-certificates -y
curl https://repo.waydro.id | sudo bash
sudo apt install waydroid -y
```

@tab Fedora

```bash
sudo dnf install waydroid
```

@tab Arch (AUR)

```bash
sudo yay -S waydroid
```

:::

## [Zen Browser](https://flathub.org/apps/app.zen_browser.zen)

From Zen: “Zen is the best way to browse the web. Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.”
:::tabs
@tab Flatpak (System)

```bash
flatpak install flathub app.zen_browser.zen
```

@tab Flatpak (User)

```bash
flatpak install --user flathub app.zen_browser.zen
```

@tab Arch (AUR)

```bash
yay -S zen-browser-bin
```

:::

## [Obsidian](https://flathub.org/apps/md.obsidian.Obsidian)
Obsidian is a powerful notetaking app available across different platforms based on MarkDown. Obsidian supports custom theming, sync, and publishing services. Obsidian is the perfect app for a second brain.

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub md.obsidian.Obsidian
```

@tab Flatpal (User)

```bash
flatpak install --user flathub md.obsidian.Obsidian
```

:::

## [Mission Center](https://flathub.org/apps/io.missioncenter.MissionCenter)
Useful and intuitive system resources displayer, that accurately displays informations including CPU, GPU, Ram, processes, among others. 

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub io.missioncenter.MissionCenter
```

@tab Flatpak (User)

```bash
flatpak install --user flathub io.missioncenter.MissionCenter
```

:::

## [rQuickshare](https://henriqueclaranhan.github.io/rquickshare/)
From Github "Rust implementation of NearbyShare/QuickShare from Android for Linux and macOS"

:::important
The following lines are as of June 5, 2025, newer version may be released.
:::

:::tabs

@tab AppImage (No Root Required)
```bash
# Install the AppImage from the link above and give exec permission by the line below
chmod +x r-quick-share-main_v0.11.5_glibc-2.39_amd64.AppImage
```

:::

:::tabs

@tab Debian/Ubuntu

```bash 
sudo dpkg -i r-quick-share-main_v0.11.5_glibc-2.39_amd64.deb
```

@tab Fedora

```bash
sudo rpm -i r-quick-share-main_v0.11.5_glibc-2.39_1-x86_64.rpm
```

@tab Arch (Unofficial AUR)

```bash
yay -S r-quick-share
```
:::

## [Scrcpy](https://github.com/Genymobile/scrcpy)
"This application mirrors Android devices (video and audio) connected via USB or TCP/IP and allows control using the computer's keyboard and mouse. It does not require root access or an app installed on the device. It works on Linux, Windows, and macOS." - Github

:::tabs

@tab Debian/Ubuntu

```bash
Install the .tar.gz file from the link above
```

@tab Fedora

```bash
dnf copr enable zeno/scrcpy && dnf install scrcpy
```

@tab Arch
```bash
pacman -S scrcpy
```

:::

## [LocalSend](https://localsend.org/)
Open-source, cross platform file sharer to nearby devices

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub org.localsend.localsend_app
```

@tab Flatpak (User)

```bash
flatpak install --user flathub org.localsend.localsend_app
```

@tab Arch (AUR)

```bash
yay -S localsend-bin
```

:::

## [Copyq](https://github.com/hluk/CopyQ)
"CopyQ is an advanced clipboard manager with powerful editing and scripting features" -Github

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub com.github.hluk.copyq
```

@tab Flatpak (User)

```bash
flatpak install --user flathub com.github.hluk.copyq
```

:::

### For Non-Flatpak Downloads:

:::tabs

@tab Debian/Ubuntu

```bash
sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install copyq
```

@tab Fedora

```bash
sudo dnf install copyq
```

@tab Arch
```bash
sudo pacman -S copyq
```

:::

## [Inkscape](https://flathub.org/apps/org.inkscape.Inkscape)
Open souce vector graphic editor

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub org.inkscape.Inkscape
```

@tab Flatpak (User)

```bash
flatpak install --user org.inkscape.Inkscape
```

:::
