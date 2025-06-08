---
title: gnome
createTime: 2025/06/07 16:35:26
permalink: /linux-guides/gnome/
---

:::warning
TODO
:::

## Further adjusting the workflow

### Go through the settings app and make some quick tweaks to your needs.

Here are some settings I'd recommend:

- **Display** — Adjust refresh rate and resolution as needed.
- **Multitasking** — Adjust according to your workflow.
- **Appearance** — You can add your own wallpaper and change to dark mode.
- **Online Accounts** — You can connect to your online accounts to access calendar, cloud drives, and more within Gnome apps.

### Install some apps for more advanced options

:::important This is only for Gnome users.
:::

:::tip You can always use your distro's GUI software store (such as Gnome's **Software** instead of the commandline).
:::

You'd need [Gnome Tweaks](../linux-apps/gnomie.md#gnome-tweaks), [Dconf Editor](../linux-apps/gnomie.md#dconf-editor), and [Extension Manager](../linux-apps/gnomie.md#extension-manager).


:::tabs

@tab Debian/Ubuntu

```bash
sudo apt install gnome-tweaks
sudo apt install dconf-editor
```

@tab Fedora

```bash
sudo dnf install gnome-tweaks
sudo dnf install dconf-editor
```

@tab Arch

```bash
sudo pacman -S gnome-tweaks
sudo pacman -S dconf-editor
```

:::

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

## Useful Extensions

<!-- ::::card-grid

:::card title="Launch New Instance" icon="mdi:about" link=https://extensions.gnome.org/extension/600/launch-new-instance/
:::

:::card title="Appindicator and KStatusNotifierItem Support" icon="mdi:about"
:::

:::card title="Caffeine" icon="mdi:about"
:::

:::card title="Clipboard Indicator" icon="mdi:about"
:::

:::: -->


- [Launch New Instance](https://extensions.gnome.org/extension/600/launch-new-instance/)
- [Appindicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/)
- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
- [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)

## Further customization

- Adw-gtk3
- Ocean theme
- Blur My Shell
- KeyBoard Shortcuts
- Dash To Dock
- Gnome Fuzzy App Search
- 
