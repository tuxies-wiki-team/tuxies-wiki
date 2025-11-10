---
title: Flashing Guide
createTime: 2025/06/26 09:05:08
permalink: /linux-guides/flashing-guide/
---

::::card-grid

:::card title="Author(s)" icon="fluent-emoji:writing-hand"
Lunear
:::

<!-- :::card title="Co-author(s)" icon="fluent-emoji:two-hearts"

::: -->

::::

<!-- end of card grid -->

:::info

This guide provides a thorough walk-through of flashing a Linux ISO into a pendrive to enable local installation through [Ventoy](https://www.ventoy.net/en/index.html)

:::

:::warning

Flashing a USB drive will **completely erase all contents** within, thus make sure to check or back-up necessary files/documents before proceeding

:::

## **What is Flashing?**

Flashing a USB drive enables us to run local ISO on the machine, which might be used for OS installation, rescue environment, etc... In the case of Linux, flashing an ISO onto a drive would be the very first step in starting your journey.

:::note
Upon flashing a drive, the USB drive will not function as a storage device anymore, and will only serve the purpose to boot live environments.
:::

## **How to Flash?**

There are many tools available for this purpose, including but not limited to [Rufus](https://rufus.ie/en/), [Balena Etcher](https://etcher.balena.io/), [Ventoy](https://www.ventoy.net/en/index.html), and [Fedora Media Writer](https://flathub.org/apps/org.fedoraproject.MediaWriter).

:::info Why Ventoy?

This guide will use Ventoy as it supports multiple ISO images on a single USB drive, compatible in both Windows and Linux, and most importantly, open source.

:::

Other great options for this purpose would be [Rufus](https://rufus.ie/en/) (only available on Windows) and [Fedora Media Writer](https://flathub.org/apps/org.fedoraproject.MediaWriter) (only available on Linux).

::::steps

- Download Ventoy from the [official website](https://www.ventoy.net/en/download.html)

  - For Windows, install `.zip` file and unzip the file
  - For Linux, install `tar.gz` file and unzip the file

- Installation
  - For Windows, locate `Ventoy2Disk.exe` and run it.
  - For Linux, locate `VentoyGUI.x86_64` and run it.
  - After executing the files, a GUI should appear. Select the correct disk to format, and Install.

::::

Great! Now you have flashed your drive and Ventoy installed on the current USB drive.

Your next steps would be to download ISOs from the distribution's official website

- [Fedora](https://fedoraproject.org/workstation/download)
- [Arch](https://archlinux.org/download/)
- [Debian](https://www.debian.org/distrib/)
- [Ubuntu](https://ubuntu.com/download/desktop)

:::card title="Done!" icon="fluent-emoji:party-popper"
After installing the ISO(s) desired, simply drag the ISO file into the flashed drive as Ventoy will automatically locate the ISO files. Your drive is ready to boot!
:::
