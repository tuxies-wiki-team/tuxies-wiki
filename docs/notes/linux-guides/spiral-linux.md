---
title: Spiral Linux Guide
createTime: 2025/05/29 08:29:45
permalink: /linux-guides/spiral-linux/
draft: true
---

::::card-grid

:::card title="Author(s)" icon="fluent-emoji:writing-hand"
joseporcar
:::

<!-- :::card title="Co-author(s)" icon="fluent-emoji:two-hearts"
::: -->

::::

:::warning Under construction
We are currently looking for a contributor for this guide. Check [Become a Contributor](../about/contributions/README.md) for more details.
:::


:::tip Spiral?
==Spiral linux== is to Debian what EndeavorOS is to Arch. This means it provides a basic preconfigured setup to get you started while also offering some nice bonuses such as BTRFS subvolume layout that allows for automatic Snapper snapshots, optimal font rendering, preinstalled tlp power configuration, and others. I believe this is the way to go for a
:::

## **Installation**

::::steps

- **Download the ISO**
  You can find the iso at [the official Spiral Linux website](https://spirallinux.github.io/#download) (I personally use Gnome)
  :::warning
  The bright orange builders button looks attractive, but you should just go to [Arch](arch.md) with [Hyprland](https://hypr.land) if you want to work with a window manager
  :::
- **Flash it!**
  With the downloaded ISO follow our [flashing guide](../../guides/flashing-guide)
- **Boot it up**
  - Make sure to have the USB drive plugged in
  - Reboot (or boot up) your system and spam the F12, F10, F2, Delete and any key that could possibly be your bios configuration (or boot menu)
  - Set your usb drive as the first in the boot menu and disable secure boot (if you don't know how then play around a bit until you find!)
  - Exit bios and save the changes
  - Select the first on the Spiral boot screen
- **Run installer**
  - The installer is at the top left in the desktop
  - Follow the instructions provided
    :::caution DUAL BOOTERS
    You may find an option to select the place for the bootloader location (bottom of Partitions section). ==MAKE SURE== that the you select the same drive as your windows partition. Otherwise you may find a very ugly grub recovery screen (if you find it anyways reinstall and make sure to select the Master Boot Record at the Windows drive)
- **Install updates** - First thing you should do is run the following commands to make sure your system is up to date.
  ```bash
    sudo apt update
    sudo apt upgrade
  ```
  - **Reboot** the system for the updates to apply

::::

## **Snapshots**

:::important TODO
:::

## **Make it pretty**

This will vary based on your ==desktop environment==. You can check out specific guides [here](http://localhost:8080/tuxies-wiki/linux-guides/#desktop-environments-des)
