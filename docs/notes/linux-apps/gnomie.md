---
title: Gnomie
createTime: 2025/05/29 08:29:45
permalink: /linux-apps/gnomie/
---

::::card-grid

:::card title="Author(s)" icon="fluent-emoji:writing-hand"
aier, Lunear
:::

:::card title="Co-author(s)" icon="fluent-emoji:two-hearts"

<!-- add name here -->

:::

::::

:::warning TODO: Separate extensions from actual applications.
:::

## [Dconf Editor](https://flathub.org/apps/ca.desrt.dconf-editor)

GUI to edit GSettings/Dconf database (advanced Gnome system settings).

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub ca.desrt.dconf-editor
```

@tab Flatpak (User)

```bash
flatpak install --user flathub ca.desrt.dconf-editor
```

:::

:::important
If you think that some settings are missing in Dconf, install your distro’s package instead of the Flatpak.
:::

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install dconf-editor
```

@tab ::devicon:archlinux:: Arch

```bash
sudo pacman -S dconf-editor
```

@tab ::devicon:debian:: Debian/Ubuntu

```bash
sudo apt install dconf-editor
```

:::

## [Extension Manager](https://flathub.org/apps/com.mattjakeman.ExtensionManager)

GUI to modify Gnome Extensions.

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub com.mattjakeman.ExtensionManager
```

@tab Flatpak (User)

```bash
flatpak install --user flathub com.mattjakeman.ExtensionManager
```

:::

## [Gnome Tweaks](https://github.com/GNOME/gnome-tweaks)

Change fonts, manage shell themes (requires `User Theme` extension), add hide and maximize buttons, and more!

:::tabs

@tab ::devicon:fedora:: Fedora

```bash
sudo dnf install gnome-tweaks
```

@tab ::devicon:debian:: Debian/Ubuntu

```bash
sudo apt install gnome-tweaks
```

:::

## [SaveDesktop](https://flathub.org/apps/io.github.vikdevelop.SaveDesktop)

Save your desktop configurations
:::tabs
@tab Flatpak (System)

```bash
flatpak install flathub io.github.vikdevelop.SaveDesktop
```

@tab Flatpak (User)

```bash
flatpak install flathub io.github.vikdevelop.SaveDesktop
```

:::

<!-- ## [Pano - Clipboard Manager](https://extensions.gnome.org/extension/5278/pano/)
Gnome Extension, that provides a unique clipboard display.

:::tabs

@tab

```bash

``` -->

## [Papers](https://apps.gnome.org/Papers/)

Document viewer for GNOME

:::tabs

@tab Flatpak (System)

```bash
flatpak install flathub org.gnome.Papers
```

@tab Flatpak (User)

```bash
flatpak install --user flathub org.gnome.Papers
```

:::

## [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)

Clipboard manager for Gnome

**Install directly from link above**
