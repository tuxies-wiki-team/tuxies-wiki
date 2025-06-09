---
title: Popular
createTime: 2025/05/29 08:29:45
permalink: /linux-apps/popular/
---

<!-- <sub>Go back to [Linux Apps Library](README.md)</sub> -->

## [Discord](https://flathub.org/apps/com.discordapp.Discord)

Discord messenger. Join servers and chat with friends!

:::tabs
@tabFlatpak (System)

```bash
flatpak install flathub com.discordapp.Discord
```

@tab Flatpak (User)

```bash
flatpak install --user flathub com.discordapp.Discord
```

:::

Screen sharing does not work on Wayland because Discord uses an outdated electron version. For that, you may want to check out Vesktop or install Xwayland Video Bridge.

[Vesktop](./editors-choice.md#vesktop) supports video and audio sharing out of the box and has Vencord tweak integrated. It is the editors’ preferred way to use Discord.

### [Vencord](https://vencord.dev/download/)

A Discord mod (not affiliated with Discord) that allows for theming and cool features.

_Fun fact: **aier** loves the 'Fluent Discord' & 'MaterialDiscord" theme found in BetterDiscord's website._

**Very easy installation. Just paste this line in the terminal to run and set up the installer:**

```bash
sh -c "$(curl -sS https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh)"
```

### Discord Rich Presence (DRP)

Flatpak is a sandbox, you need a few more steps to set up Discord Rich Presence

:::tabs

@tab DRP for Non-Flatpak Apps

```bash
mkdir -p ~/.config/user-tmpfiles.d
echo 'L %t/discord-ipc-0 - - - - app/com.discordapp.Discord/discord-ipc-0' > ~/.config/user-tmpfiles.d/discord-rpc.conf
systemctl --user enable --now systemd-tmpfiles-setup.service
```

@tab DRP for Flatpak Apps
Not Recommended, find more info in the GitHub Link

:::

## [Gparted](https://gparted.org/download.php)

:::tabs
@tab Debian/Ubuntu

```bash
sudo apt-get install gparted
```

@tab Fedora

```bash
sudo dnf install gparted
```

@tab Arch

```bash
sudo pacman -S gparted
```

:::

## [OBS Studio](https://flathub.org/apps/com.obsproject.Studio)

:::tabs
@tab Flatpak(System)

```bash
flatpak install flathub com.obsproject.Studio
```

@tab Flatpak(User)

```bash
flatpak install --user flathub com.obsproject.Studio
```

:::

### [v4l2loopback (Virtual Camera and More)](https://github.com/umlaeute/v4l2loopback)

You would want to install v4l2loopback if you want to use the “virtual camera” function in OBS Studio.
::::steps

- Dependencies:

  :::tabs
  @tab Debian/Ubuntu

  ```bash
  sudo apt install dkms
  ```

  @tab Fedora

  ```bash
  sudo dnf install gcc kernel-devel dkms
  ```

  @tab Arch

  ```bash
  sudo pacman -S v4l2loopback-dkms
  ```

  :::

- Install Module & Run:

  ```bash
  git clone https://github.com/umlaeute/v4l2loopback
  cd v4l2loopback
  make && sudo make install
  sudo depmod -a
  sudo modprobe v4l2loopback
  ```

- Load module on startup:

  Create the File `/etc/modules-load.d/v4l2loopback.conf` and write:

  ```bash
  v4l2loopback
  ```

  In the case where the “Virtual Camera” button doesn’t show on OBS, the system may not have loaded the module. You can either redo the installation, or try loading the the module manually with:

  ```bash
  sudo modprobe v4l2loopback
  ```

::::

## VS Code

:::tabs
@tab Flatpak (System)

```bash
flatpak install flathub com.visualstudio.code
```

@tab Flatpak (User)

```bash
flatpak install --user flathub com.visualstudio.code
```

:::

### [VS Code Non-Flatpak Download](https://code.visualstudio.com/Download)

If you have to avoid limitations imposed by using a Flatpak wrapper of VS Code, check the downloads methods below.

:::tabs
@tab Debian/Ubuntu
Download .deb file from link above

@tab Fedora
Download .rpm file from link above

@tab Arch (Code - OSS)

```bash
sudo pacman -S code
```

:::
