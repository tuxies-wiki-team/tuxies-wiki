---
title: Essentials
createTime: 2025/05/29 08:29:45
permalink: /linux-apps/essentials/
contributors:
  - aier
  - Lunear
---

## **[Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal)**

GUI to modify Flatpak permissions

:::tabs

@tab ::simple-icons:flatpak:: Flatpak (System)

```bash
flatpak install flathub com.github.tchx84.Flatseal
```

@tab ::simple-icons:flatpak:: Flatpak (User)

```bash
flatpak install --user flathub com.github.tchx84.Flatseal
```

:::

## **[Timeshift](https://github.com/linuxmint/timeshift)**

Create snapshots of your computer that you can go back.

::::steps

- **SELinux Compatibility**

  If you want to use Timeshift with SELinux, you might want to set SELinux mode from “enforcing” to “permissive” to enable proper function among kernel versions.

  :::code-tabs

  @tab /etc/selinux/config

  ```bash
  # [!code --]
  SELINUX=enforcing
  # [!code ++]
  SELINUX=permissive
  ```

  :::

  :::note If you are restoring snapshots in RSYNC mode, you may encounter file mislabeling errors or "permission denied" errors. You may perform the following. Be patient with the reboot as the system takes its time to relabel files.

  ```bash
  sudo touch /.autorelabel
  ```

  ```bash
  reboot
  ```

  :::

- **Installation**

  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install timeshift
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S timeshift
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt-get install timeshift
  ```

  :::

::::
