---
title: Debian Guide
createTime: 2025/05/29 08:29:45
permalink: /linux-guides/debian/
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

:::tip Slow and steady wins the race
**Debian** is known for its great stability and resillience. In order to accomplish this, it does run older versions of many packages and has slower update times which could make it incompatible with the most bleeding edge of users. However, if you want to run a server at home (my use case), or just want a very reliable system, ==Debian== is the way to go.

This guide will teach you how to start your own Debian home server machine from installation to sensation!
:::

## **Installation**

::::steps

- **Download the ISO**
  You can get the ISO from [the debian website](https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/). Just scroll to the bottom and click on the file ending in _.iso_. In case you have an arm processor follow from this section of [the debian website](https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/)
- **Flash it!**
  With the downloaded ISO follow our [flashing guide](../../guides/flashing-guide)
- **Boot it up**
  - Make sure to have the USB drive plugged in
  - Reboot (or boot up) your system and spam the F12, F10, F2, Delete and any key that could possibly be your bios configuration (or boot menu)
  - Set your usb drive as the first in the boot menu and disable secure boot (if you don't know how then play around a bit until you find!)
  - Exit bios and save the changes
  - Select the graphic installer and follow the on screen instructions
    ::::

## **Setting up your home server**

### TailScale
=TailScale= is a tool that will allow you to access your home server from any device that also has tailscale installed. We will use this to acces the machine. To set it up just follow the instructions from [the Tailscale website](https://tailscale.com/). This process should just take a few minutes. It is _that_ easy.

### SSH

The next thing you want set up is ==SSH== in order to modify your server from any other device or even from beyond your home.
To do so, you must follow our [SSH guide](../../guides/ssh-guide)



