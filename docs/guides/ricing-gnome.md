---
title: Ricing (Gnome)
createTime: 2025/07/21 20:01:26
permalink: /guides/ricing-gnome/
draft: true
---

:::warning This article is currently under construction!
:::

:::warning TODO List:

**Extensions:**

- [ ] Blur My Shell
- [ ] User Theme (shell theme)

**Legacy themes:**

- [x] adw-gtk3

**Others:**

- [ ] Sound
- [ ] Cursor
- [ ] Icons
- [ ] Font
- [ ] GTK4 theme

:::

:::info

Ricing is the process of ==customizing aesthetics== (in this case, your desktop) to fit your tastes

All ricing tips and tricks are ==optional== and are not necessary and add no utility.

:::

### Using `adw-gtk3`

:::info `adw-gtk3` is a theme that ==makes older GTK3 apps look more modern== and consistent with their newer GTK4 counterparts.
:::

:::::steps

- **Installation**

  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install adw-gtk3
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  pacman -S adw-gtk-theme
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  curl -s https://julianfairfax.codeberg.page/package-repo/pub.gpg | gpg --dearmor | sudo dd of=/usr/share/keyrings/julians-package-repo.gpg
  echo 'deb [ signed-by=/usr/share/keyrings/julians-package-repo.gpg ] https://julianfairfax.codeberg.page/package-repo/debs packages main' | sudo tee /etc/apt/sources.list.d/julians-package-repo.list
  sudo apt install adw-gtk3
  ```

  @tab

  :::

  In addition, you would want to install `adw-gtk3` so that your Flatpak apps can be styled as well.

  :::tabs

  @tab ::simple-icons:flatpak:: Flatpak (System)

  ```bash
  flatpak install org.gtk.Gtk3theme.adw-gtk3 org.gtk.Gtk3theme.adw-gtk3-dark
  ```

  :::

- **Usage**

  :::tabs
  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/interface/gtk-theme "'adw-gtk3'"
  ```

  @tab ::mdi:puzzle:: Append changes (Gnome Tweaks)

  `Appearance` > `Legacy Applications` --> **Adw-gtk3**

  @tab ::mdi:reload:: Reset changes (cli)

  dconf reset /org/gnome/desktop/interface/gtk-theme
  :::

  Additionally, you'd have to apply this theme for Flatpak apps, too.
  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  # Below are commands taken from the official adw-gtk3 GitHub Page
  sudo flatpak override --filesystem=xdg-data/themes # Allow Flatpak apps to access system theme folder
  sudo flatpak mask org.gtk.Gtk3theme.adw-gtk3 # Prevent Flatpak from updating/replacing the adw-gtk3 theme
  sudo flatpak mask org.gtk.Gtk3theme.adw-gtk3-dark # Prevent Flatpak from updating/replacing the adw-gtk3-dark theme
  ```

  :::

:::::

### Ocean Sound Theme

:::info A refined professional sounding alternative to the default Gnome sound theme made by KDE.
:::

:::::steps

- **Installation**

- **Usage**

:::::

### Blur My Shell

:::info A Gnome extension that adds blur to different components of the shell to make everything a little more aesthetic.
:::
