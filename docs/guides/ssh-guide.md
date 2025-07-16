---
title: SSH Guide
tags:
  - Beginner's Linux
  - Network
createTime: 2025/07/14 18:18:12
permalink: /guides/ssh-guide/
---

::::card-grid

:::card title="Author(s)" icon="fluent-emoji:writing-hand"
joseporcar
:::

<!-- :::card title="Co-author(s)" icon="fluent-emoji:two-hearts"

::: -->

::::

<!-- end of card grid -->

:::tip Why use ==SSH==
SSH is very useful if you wish to access your home computer when you are not at home. This can let you see the status of any program or run a new one. Doing so carefully is very important as in order to access it from beyond your home network special security measures must be enacted.
:::
:::info Prerequisites
This guide assumes you have OpenSSH installed and Gnome
(or at least the Advanced Network Manager that comes with it on Debian)
:::
::::steps

- **Setting up a static IP address for your home machine**

  This is rather simple thanks to the Advanced Network Manager that came with the distro. All you need is to open it (you can look it up in the search bar), click on your connection and go to to ipv4 section where you just have to set the toggle to manual and put your current ip and the router's ip for the gateway (you can get them from `ip r`. First line, the leftmost one is your routers and rightmost is your own). For gateway just type 255.255.255.0

- **First time**

  On the client machine connected to the same network as the home computer you should run.

  ```bash
  ssh [server_username]@[server_ip]
  ```

  You will be prompted for a password, enter the one in of your home machine
  :::tip How do I get those values exactly?
  You can get your username from running whoami on the home server, and the ip is the one you set up for static ip
  :::

- **Changing to more secure settings**

  Now, we are going to configure your home machine for more convenience and security. To do this run the following

  ```bash
  ssh-keygen -f ~/.ssh/[name_for_keys]; # Creates the client keys
  ssh-copy-id [server_username]@[server_ip]
  ```

  After setting up this key we will change the settings of ssh in `/etc/ssh/sshd_config`. Here you are going to want to append the following lines

  ```
  PermitRootLogin no
  PasswordAuthentication no
  ```

  After this run the followign for your changes to take effect

  ```bash
  systemctl restart sshd
  ```

- **Setting up external security programs**

  Next up, you want to set up fail2ban to block anyone who tries to spam your ssh connection

  ```bash
  apt install fail2ban;
  echo "sshd_backend = systemd" >> /etc/fail2ban/paths-debian.conf;
  systemctl restart fail2ban
  ```

- **Accessing from beyond local**

  Finally, access your router settings and open up port 22 (or change the port in ssh settings at /etc/ssh/sshd_config). How to do this will depend greatly on your router brand, google specifics.

::::
