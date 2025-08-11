---
title: Ricing (Gnome)
tags:
  - Ricing
createTime: 2025/07/21 20:01:26
permalink: /guides/ricing-gnome/
---

:::warning This article is currently under construction!
:::

:::warning TODO List:

**Extensions:**

- [ ] Blur My Shell
- [x] User Theme (shell theme)
- [ ] Dash To Dock
- [ ] Just Perfection 

**Legacy themes:**

- [x] adw-gtk3

**Others:**

- [ ] Sound
- [ ] Cursor
- [ ] Icons
- [ ] Font
- [ ] GTK4 theme

:::

:::card title="Introduction"
When you first installed Gnome, does everything feel off? Icons are weird, notifications are centered, where are my apps? In this article, we will introduce the concept of ==ricing== to make Gnome feel as comfy and beautiful as you want.
:::

:::info

Ricing is the process of ==customizing aesthetics== (in this case, your desktop) to fit your tastes

All ricing tips and tricks are ==optional== and are not necessary and add no utility.

:::

## Legacy Themes
### Using `adw-gtk3`

:::info `adw-gtk3` is a theme that ==makes older GTK3 apps look more modern== and consistent with their newer GTK4 counterparts.
:::

::::steps

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

::::

### Ocean Sound Theme

:::info A refined professional sounding alternative to the default Gnome sound theme made by KDE.
:::

:::::steps

- **Installation**

- **Usage**

:::::

## **Extensions**
:::info What are extensions?
Extensions are programs installed onto Gnome to allow extra functionality.  
In this section, the following extensions are purely for ricing.

They're installed using the application "Extension Manager."
Refer to our [Apps-Library](../notes/linux-apps/gnomie.md) for installation.
:::

### Blur My Shell


### User Theme
::: info The General Idea
This extension allows Gnome to install themes downloaded online to make your desktop environment have a different aesthetic.
:::

:::note You will need to install [Gnome-Tweaks](../notes/linux-apps/gnomie.md) to select the themes later
:::

:::::: collapse
- Steps Overview

  :::::card title 
  :::: steps
  
  - **Downloading User-Themes extension**

    - lorem
    :::note Why?
    - This enables Gnome to install themes
    :::
  ::::
  :::::
  
  Enabling the ability to install themes isn't enough, we have to actually install the themes. Below steps record said progress.

  :::::card title="Installing themes"
  ::::steps
  
  - **Download theme file**

    - Download themes from the [Pling Website](https://www.gnome-look.org/browse?cat=134&ord=latest)  
    - Click on desired theme
    - On the upper right hand side, click download and select desired color of the theme
    :::note Why?
    These theme files contain the code for how the theme looks 
    :::
    
  - **Extract the file**

    - In your file manager(Nautilus), right click on the tar.gz file you just downloaded and click on "extract."
    :::note Why?
    This decompresses the files from the tar.gz file format
    :::
    
  - **Move files into ~/.local/share/themes folder**

    - Go into the extracted folder, select all the folders inside, move them to ~/.local/share/themes
    :::warning
    In the case that the "themes" folder doesn't exist, create one yourself inside ~/.local/share/
    :::
    :::note Why?
    The reason we put it in ~/.local/share/themes is because linux is built off file systems, everything is a file. We put the theme file in here so linux knows of the exsistence of these theme files.
    :::

  - **Selecting Theme using Gnome-Tweaks**

    - Open Gnome-Tweaks.
    - Navigate into these tabs/headings: Appearance tab->Styles->Shell.
    - Under the ==shell drop-down== you will see options for the themes you just extracted and moved. Select the theme you want.
    :::note
    These theme options are present because the theme files were put into the directory linux recognizes as the place to look for themes.
    :::
  
  ::::
  :::::
  
::::::
---

### Dash to dock

### Dash to Panel




## Others
### Sound
### Cursor
### Icons
### Font



