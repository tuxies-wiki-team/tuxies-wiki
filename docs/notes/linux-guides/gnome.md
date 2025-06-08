---
title: gnome
createTime: 2025/06/07 16:35:26
permalink: /linux-guides/gnome/
---

Under construction

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

```bash
sudo dnf install gnome-tweaks
sudo dnf install dconf-editor
```

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

## Further customization

4. Adw-gtk3
5. Ocean theme
