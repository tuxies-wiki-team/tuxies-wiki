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

Create snapshots of your computer that you can roll back to. Best suited to non-`BTRFS` systems such as `ext4`.

:::tip Using BTRFS?
If your system uses the `BTRFS` filesystem (Fedora's default), we recommend [btrfs-assistant](#btrfs-assistant) below instead. BTRFS snapshots are faster, more reliable, and preserve SELinux labels, avoiding relabeling issues entirely.
:::

::::steps

- **Installation**

  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install timeshift
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt-get install timeshift
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S timeshift
  ```

  :::

- **Recovering from SELinux label issues after a restore**

  If you are restoring snapshots in RSYNC mode on a SELinux-enforcing distro (e.g. Fedora, RHEL, Rocky), you may encounter file mislabeling errors or "permission denied" errors on first boot. Trigger a full filesystem relabel and reboot — be patient, the relabel pass takes a few minutes.

  ```bash
  sudo touch /.autorelabel
  ```

  ```bash
  reboot
  ```

  :::warning If the restored system fails to boot under enforcing SELinux, interrupt GRUB and append `enforcing=0` to the kernel command line for that one boot only. This lets `/.autorelabel` complete, after which the system will reboot itself into a normally-enforcing state. Do ==not== edit `/etc/selinux/config` — disabling enforcement system-wide weakens every confined service on your machine, not just Timeshift.
  :::

::::

## **[btrfs-assistant](https://gitlab.com/btrfs-assistant/btrfs-assistant)**

A simple GUI for managing snapshots on the `BTRFS` filesystem, built on top of `snapper`. On `BTRFS`, snapshots are near-instant and preserve SELinux labels — no permissive mode and no relabeling needed.

:::tip Prefer the terminal?
Every step below is also available through the `snapper` CLI if you'd rather not use the GUI.
:::

::::steps

- **Installation**

  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install btrfs-assistant snapper python3-dnf-plugin-snapper
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt-get install btrfs-assistant snapper
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S btrfs-assistant snapper
  ```

  :::

- **Set up snapshots**

  Open `btrfs-assistant` and go to the ==Snapper Settings== tab. Click ==New==, set ==Backup path== to `/`, give it a ==Config name==, then click ==Save==.

  With the config selected, tick ==Enable timeline snapshots== and choose how many to keep under ==Snapshot Retention==. Then, under ==systemd Unit Settings==, tick ==Snapper timeline enabled== and ==Snapper cleanup enabled== and click ==Apply systemd changes==.

  :::tip I recommend keeping 3–5 snapshots at a time.
  :::

- **Take your first snapshot**

  Switch to the ==Snapper== tab, select your config, and click ==New== to take a manual snapshot. Give it a description like `clean install`.

- **Restore a snapshot when needed**

  On the ==Snapper== tab, open the ==Browse/Restore== view, select the snapshot you want, and click ==Restore==. Reboot once it completes.

  :::note Want to boot straight into a snapshot when your system won't start? [`grub-btrfs`](https://github.com/Antynea/grub-btrfs) adds a snapshots submenu to GRUB for exactly that. On distros without an official package you can build it from source — see its README.
  :::

::::
