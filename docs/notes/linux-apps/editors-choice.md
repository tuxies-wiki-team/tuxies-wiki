---
title: Editor's Choice
createTime: 2025/05/22 09:05:08
permalink: /linux-apps/editors-choice/
contributors:
  - aier
  - Lunear
---

## **[CopyQ](https://github.com/hluk/CopyQ)**

**From CopyQ's GitHub:** "CopyQ is an advanced clipboard manager with powerful editing and scripting features"

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub com.github.hluk.copyq
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub com.github.hluk.copyq
```

:::

**For Non-Flatpak Downloads:**

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install copyq
```

@tab ::devicon:archlinux:: Arch

```bash
sudo pacman -S copyq
```

@tab ::devicon:debian:: Debian/Ubuntu

```bash
sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install copyq
```

:::

## **[Inkscape](https://flathub.org/apps/org.inkscape.Inkscape)**

Open souce vector graphic editor

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub org.inkscape.Inkscape
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user org.inkscape.Inkscape
```

:::

## **[LocalSend](https://localsend.org/)**

Open-source, cross-platform file sharer to nearby devices.

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub org.localsend.localsend_app
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub org.localsend.localsend_app
```

@tab ::devicon:archlinux:: Arch (AUR)

```bash
yay -S localsend-bin
```

:::

## **[Mission Center](https://flathub.org/apps/io.missioncenter.MissionCenter)**

Useful and intuitive system resources displayer, that accurately displays informations including CPU, GPU, Ram, processes, among others.

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub io.missioncenter.MissionCenter
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub io.missioncenter.MissionCenter
```

:::

## **[Nautilus](https://apps.gnome.org/Nautilus/)**

The clean, functional, and blazing fast file manager by Gnome
:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install nautilus
```

@tab ::devicon:archlinux:: Arch

```bash
sudo pacman -S nautilus
```

@tab ::devicon:debian:: Debian/Ubuntu

```bash
sudo apt install nautilus
```

:::

## **[Obsidian](https://flathub.org/apps/md.obsidian.Obsidian)**

Obsidian is a powerful markdown note-taking app available across different platforms. Obsidian supports custom theming, sync (paid), and publishing services. Write everything that is useful or that can be useful down and start building your second brain!

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub md.obsidian.Obsidian
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub md.obsidian.Obsidian
```

:::

## **[rQuickshare](https://henriqueclaranhan.github.io/rquickshare/)**

**From rQuickshare's Github:** "Rust implementation of NearbyShare/QuickShare from Android for Linux and macOS."

::::tabs

@tab AppImage (No Root Required)

:::important
The following lines are as of June 5, 2025, newer version may be released.
:::

```bash
# Install the AppImage from the link above and give exec permission by the line below
chmod +x r-quick-share-main_v0.11.5_glibc-2.39_amd64.AppImage
```

::::

::::tabs

@tab ::devicon:fedora:: Fedora

:::important
The following lines are as of June 5, 2025, newer version may be released.
:::

```bash
sudo rpm -i r-quick-share-main_v0.11.5_glibc-2.39_1-x86_64.rpm
```

@tab ::devicon:archlinux:: Arch (AUR)

```bash
yay -S r-quick-share
```

@tab ::devicon:debian:: Debian/Ubuntu

:::important
The following lines are as of June 5, 2025, newer version may be released.
:::

```bash
sudo dpkg -i r-quick-share-main_v0.11.5_glibc-2.39_amd64.deb
```

::::

## **[Scrcpy](https://github.com/Genymobile/scrcpy)**

**From Scrcpy's GitHub:** "This application mirrors Android devices (video and audio) connected via USB or TCP/IP and allows control using the computer's keyboard and mouse. It does not require root access or an app installed on the device. It works on Linux, Windows, and macOS."

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf copr enable zeno/scrcpy && sudo dnf install scrcpy
```

@tab ::devicon:archlinux:: Arch

```bash
pacman -S scrcpy
```

@tab ::devicon:debian:: Debian/Ubuntu

Install the .tar.gz file from the link above

:::

## **[Vesktop](https://flathub.org/apps/dev.vencord.Vesktop)**

Discord with screen sharing and audio support, as well as Vencord inbuilt.

**If you do not care about Discord Rich Presence (DRP), proceed with the Flatpak installation.**

**If you do want DRP, check out [Vesktop’s Github Releases](https://github.com/Vencord/Vesktop/releases) and download the package for your respective distribution.**

:::tabs
@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub dev.vencord.Vesktop
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub dev.vencord.Vesktop
```

:::

## **[Waydroid](https://docs.waydro.id/usage/install-on-desktops)**

Run Android on Linux!

Find out about installation details on the link above
:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install waydroid
```

@tab ::devicon:archlinux:: Arch (AUR)

```bash
sudo yay -S waydroid
```

@tab ::devicon:debian:: Debian/Ubuntu

```bash
sudo apt install curl ca-certificates -y
curl https://repo.waydro.id | sudo bash
sudo apt install waydroid -y
```

:::

## **[Zen Browser](https://flathub.org/apps/app.zen_browser.zen)**

**From Zen:** “Zen is the best way to browse the web. Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.”

:::tabs
@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub app.zen_browser.zen
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub app.zen_browser.zen
```

@tab ::devicon:archlinux:: Arch (AUR)

```bash
yay -S zen-browser-bin
```

:::

## **[Bitwarden](https://bitwarden.com/)**

Safe, trusted password manager.

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub com.bitwarden.desktop
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub com.bitwarden.desktop
```

:::

Bitwarden is also offered as a browser extension

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/?browser=firefox)
[Chrome](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/?browser=firefox)
[Edge](https://microsoftedge.microsoft.com/addons/detail/bitwarden-password-manage/jbkfoedolllekgbhcbcoahefnbanhhlh)
[Opera](https://microsoftedge.microsoft.com/addons/detail/bitwarden-password-manage/jbkfoedolllekgbhcbcoahefnbanhhlh)
[Brave](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb?browser=brave)

## **[Darktable](https://www.darktable.org/)**

From Darktable: "darktable is an open source photography workflow application and raw developer. A virtual lighttable and darkroom for photographers. It manages your digital negatives in a database, lets you view them through a zoomable lighttable and enables you to develop raw images and enhance them."

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub org.darktable.Darktable
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub org.darktable.Darktable
```

:::

### **Non-flatpak install**

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install darktable
```

@tab ::devicon:archlinux:: Arch

```bash
sudo pacman -S darktable
```

@tab ::devicon:debian::Debian/Ubuntu

```bash
sudo apt install darktable
```

:::

## **[Gradia](https://github.com/AlexanderVanhee/Gradia)**

Screenshot application with annotation modes including text, arrow, and censor

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub be.alexandervanhee.gradia
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub be.alexandervanhee.gradia
```

:::
