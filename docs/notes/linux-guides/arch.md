---
title: Arch Guide
tags:
  - Linux Guides
createTime: 2025/05/29 08:29:45
permalink: /linux-guides/arch/
draft: true
---

:::important
Before starting, it's recommended to read the [official installation guide](https://wiki.archlinux.org/title/Installation_guide) and understand the major concepts.
:::

:::caution
This guide only works with UEFI/GPT Systems. For BIOS/MBR Systems, this guide will NOT work.
:::

## Part 1. Preparation

::::steps

1.  Prepare an unallocated free space for Arch (Recommended 80GB+)

    - Windows partitioning tool: diskmgmt.msc
    - Linux partition tool: [GParted](https://gparted.org/)
    - **If Dual-Booting with Windows:** Take notes on the **Windows EFI Partition Directory**

2.  Install the Arch mirror ISO from the [official website](https://archlinux.org/download/), for country, selecting any mirror from the US

3.  Write the ISO into a bootable USB using [Rufus](https://rufus.ie/en/) or [Ventoy](https://www.ventoy.net/en/index.html) for multiple ISOs on the same USB

4.  Reboot into system BIOS System and boot into the USB.  
    **Note: Turn off secure boot**

::::

## Part 2. Connect to the Internet

Use [iwctl tool](https://wiki.archlinux.org/title/Iwd#iwctl) for internet connection.

- To ensure that the network adaptor is successfully detected by the system, list the network devices available using

```bash
device list
```

:::important
If not network adaptor is shown, force shutdown and reboot. If problem persist, Arch is not for you.
:::

- Proceed with station scanning:

```bash
station <device> scan
station <device> get-networks
```

- For connection:

```bash
station <device_name> connect “<network_name>”
```

- Check whether the internet connection is successfully established

```bash
ping archlinux.org
```

## Part 3. Partitioning

:::info
Both [cfdisk](https://www.geeksforgeeks.org/cfdisk-command-in-linux-with-examples/) and [fdisk](https://wiki.archlinux.org/title/Fdisk) are available as tools for partitioning. In this guide, **cfdisk** would be used
:::

::::steps

1. List the hard drives and partition:

   - Take notes on the hard drive name.
     ```bash
     # Examples:
     /dev/nvme0n1
     /dev/sda...
     ```
   - Run:

     ```bash
     cfdisk /dev/primary <Hard drive name>

     # Example
     cfdisk /dev/nvme0n1.
     ```

   - Search for the **unallocated space** designated for Arch

2. Essential Partitions:

   - **EFI Partition**

     - If Dual-Booting with Windows, simply use the Windows EFI Partition, **do not** create another EFI partition as it may **prevent** Windows from booting
     - If no EFI partition is available, partition at least 512MiB for EFI Partition.
       - Press **t** for choosing the type of partition and select **EFI System Partition**

   - **Swap Partition**

     - Computer Ram + 4 = Swap Partition Size. E.g. 16 GB ram + 4 = 20 GB
       - Press **t** for choosing the type of partition and select **Linux Swap**

   - **Root Parition: Two Options**
     1. Leave the rest of the partition for root partition
        - Press **t** for choosing the type of partition and select **Linux x86-64 root (/)**
     2. Leave at least 30 GB for root and the rest for home
        - Write the partitions

3. Formatting:

   - To format the EFI partition run:

   ```bash
   mkfs.fat -F 32 /dev/<efi_system_partition>
   ```

   **Skip this step if you already have a EFI Partition**

   - To format the root partition run:

   ```bash
   mkfs.ext4 /dev/<root_partition>
   ```

   - To format the swap partition run:

   ```bash
    mkswap /dev/<swap_partition>
   ```

   - To format the home partition run:

   ```bash
    mkfs.ext4 /dev/<home_partition>
   ```

4. Mount System Partitions:

   - To mount the root partition run:

   ```bash
   mount /dev/root_partition /mnt
   ```

   - To mount the EFI partition run:

   ```bash
   mount /dev/efi_partition /mnt/boot
   ```

   **If directory does not exist make the directory:**

   ```bash
   mkdir /mnt/boot
   ```

   - To enable the Swap partition run:

   ```bash
   swapon /dev/swap_partition
   ```

::::

## Part 4. Installation

Run:

```bash
pacstrap -K /mnt base linux linux-firmware nano networkmanager
```

## Part 5. System Configuration

::::steps

1. To generate fstab with UUID (recommended) Run:

   ```bash
   genfstab -U /mnt >> /mnt/etc/fstab
   ```

2. Chroot into the Arch System

   - Run:
     `bash 
arch-chroot /mnt
`
     **This means that everything you install from now on will be saved onto your computer’s root partition hard disks. This is the root in your current Arch system inside your root partition.**

3. Time:

   - Run

     ```bash
     ln -sf /usr/share/zoneinfo/<Region>/<City>/etc/localtime

     # Example setting the timezone to Caracas, Venezuela:
     ln -sf /usr/share/zoneinfo/Americas/Caracas/etc/localtime

     ```

   - Run [hwclock](https://man.archlinux.org/man/hwclock.8) to generate /etc/adjtime:
     ```bash
     hwclock --systohc
     ```
     :::important
     **This command assumes the hardware clock is set to UTC**
     :::

4. Localization:
   - edit `/etc/locale.gen` and uncomment `en_US.UTF-8 UTF-8` and other needed UTF-8 locales
     ```bash
     # Example: (Note: nano is an editor)
     nano /etc/locale.conf
     ```
     `Ctrl + o` and enter to save the changes and `Ctrl + x` to exit
5. Initramfs:

   - "Creating a new initramfs is usually not required, because [mkinitcpio](https://wiki.archlinux.org/title/Mkinitcpio) was run on installation of the [kernel](https://wiki.archlinux.org/title/Kernel) package with pacstrap." -Archlinux.org

     **Run it if you have system encryption (Bitlocker)**

     ```bash
     mkinitcpio -P
     ```

6. Create locale.conf file
   - Create directory `/etc/locale.conf`
     ```bash
     # Example: (Note: nano is an editor)
     nano /etc/locale.conf
     ```
   - Type:
     ```bash
     LANG=en_US.UTF-8
     ```
     `Ctrl + o` and enter to save the changes and `Ctrl + x` to exit

::::

## Part 6. Network Configuration

- Create the hostname file in /etc/hostname Eg. nano /etc/hostname
- Add your host name
- Complete the network configuration for the newly installed environment. That may include installing suitable network management software, configuring it if necessary and enabling its systemd unit so that it starts at boot.
  ```bash
  systemctl enable NetworkManager
  ```

## Part 7. Root Password

::::steps

1. To create a root password, run:
   ```bash
   passwd
   ```
2. If a normal user is desired, you can create another user by running:

   ```bash
   useradd -m <user-name>
   ```

   - To give the user a password, run:
     ```bash
     passwd <user-name>
     ```
   - Make user a superuser:

     ```bash
     pacman -S Sudo
     usermod -aG wheel,storage,power user-name
     EDITOR=nano visudo
     ```

     **Uncomment** `%wheel ALL-(ALL) ALL` **and add** `Defaults timestamp_timeout=0` **directly under**

     `Ctrl + o` and enter to save the changes and `Ctrl + x` to exit
   :::info
   For more information, reference to this [Youtube Video](https://www.youtube.com/watch?v=JRdYSGh-g3s&t=1361s) at minute 21:11
   :::
::::

## Part 8 Bootloader

::::steps

1. Choose and install a [Linux-capable bootloader](https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader). If you have an Intel or AMD CPU, enable [Microcode](https://wiki.archlinux.org/title/Microcode) updates in addition.

   ```bash
   # For Intel CPU:
   pacman -S amd-ucode

   # For AMD CPU:
   pacman -S amd-ucode
   ```

   **In this guide, [Grub](https://wiki.archlinux.org/title/GRUB) would be used as a bootloader**

   ```bash
   # Install grub and efibootmgr:
   pacman -S grub efibootmgr

   # For Dual-Booting:
   pacman -S os-probernmcli device wifi connect SSID_or_BSSID password password
   ```
   :::info Note
   **If using `os-prober`, edit `/etc/default/grub` and uncomment the last line `GRUB_DISABLE_OS_PROBER=false`**
   :::

2. Run `grub-install`:

   ```bash
   grub-install --target=x86_64-efi --efi-directory= <EFI_partition_mount_directory> --bootloader-id=Arch
   ```

   **Note: Make sure that the EFI partition have enough storage, you can delete unwanted bootloaders by:**

   ```bash
   ls /boot
   ls /boot/EFI
   ls rm -rf /boot/<directory-of-bootloader>
   ```

3. Now we want to create a config inside file the installed grub entry called “Arch” in the previous step

   - Run `grub-mkconfig -o /boot/grub/grub.cfg`

   :::info
   Refer to this [link](https://wiki.archlinux.org/title/GRUB) if things gets complicated
   :::

::::

## Part 9. Reboot

::::steps

1. Use [nmcli](https://wiki.archlinux.org/title/NetworkManager) to connect to network

   ```bash
   # Show local network interface
   nmcli device

   # List nearby WIFI netoworks
   nmcli <device> wifi list

   # Connect to a WIFI network
   nmcli <device> wifi connect <SSID_or_BSSID> password <password>
   ```

2. Perform system update:
   ```bash
   sudo pacman -Syu
   ```
3. Install fastfetch
   ```bash
   sudo pacman -S fastfetch
   ```
4. Run fastfetch

5. Take picture and prove you’re a prestigious Arch user

::::

## Part 10. Post Installation

::::steps

1. [Desktop Environment](https://wiki.archlinux.org/title/Desktop_environment):
   - [Gnome](https://www.gnome.org/)
     ```bash
     sudo pacman -S gnome
     ```
   - [KDE Plasma](https://kde.org/plasma-desktop/)
     ```bash
     sudo pacman -S plasma-meta
     ```
   - [Hyprland](https://hyprland.org/)
     - For installation details follow the [official wiki page](https://wiki.hyprland.org/Getting-Started/Installation/)
2. Audio (Pulse Audio vs. Pipewire)

   - [PipeWire](https://wiki.archlinux.org/title/PipeWire): (Recommended for Most Users)
     - Modern features (Bluetooth LDAC, pro audio support)
     - Screen recording (OBS, Wayland screencasting)
     - Use JACK applications (DAWs like Ardour, REAPER)
     - Lower latency (audio production, gaming)
     - Running Wayland (better integration)

   ```bash
   sudo pacman -S pipewire pipewire-pulse pipewire-jack wireplumber
   systemctl --user enable --now pipewire pipewire-pulse wireplumber
   ```

   - [Pulse Audio](https://wiki.archlinux.org/title/PulseAudio): (For older applications)
     - Using very old applications (with hardcoded PulseAudio support)
     - Prefer simplicity over advanced features
     - Troubleshooting PipeWire issues (fallback option)
     - Running Xorg-only systems without Wayland needs

   ```bash
   sudo pacman -S pulseaudio pulseaudio-alsa pavucontrol
   systemctl --user enable --now pulseaudio
   ```
3. [Yay](https://github.com/Jguer/yay) Installation
   - Yay is a package manager that allows the user to access the [AUR repository](https://aur.archlinux.org/) 
   ```bash
   sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
   ```


::::

## [ROG Asusctl](https://asus-linux.org/)

::::steps

1. Repo:

   ```bash
   sudo pacman-key --recv-keys 8F654886F17D497FEFE3DB448B15A6B0E9A3FA35

   sudo pacman-key --finger 8F654886F17D497FEFE3DB448B15A6B0E9A3FA35

   sudo pacman-key --lsign-key 8F654886F17D497FEFE3DB448B15A6B0E9A3FA35

   sudo pacman-key --finger 8F654886F17D497FEFE3DB448B15A6B0E9A3FA35
   ```

- Edit `/etc/pacman.conf` and add
  ```bash
  [g14]
  Server = https://arch.asus-linux.org
  ```
- Perform a full system update
  ```bash
  sudo pacman -Suy
  ```

2. Asusctl - custom fan profiles, anime, led control etc.
   ```bash
   pacman -S asusctl power-profiles-daemon
   systemctl enable --now power-profiles-daemon.service
   ```
3. Superfxctl - graphics switching
   ```bash
   pacman -S supergfxctl switcheroo-control
   systemctl enable --now supergfxd
   systemctl enable --now switcheroo-control
   ```
4. ROG Control Center - GUI
   ```bash
   pacman -S rog-control-center
   ```
5. Custom Kernel

   ```bash
   pacman -Sy linux-g14 linux-g14-headers
   grub-mkconfig -o /boot/grub/grub.cfg
   ```

   - Run `unname -r` it should output:

   ```bash
   # -g14 is the important one
   6.8.1-arch1-g14
   ```

   - If you are using a custom kernel use the `nvidia-dkms` package for nvidia drivers.

   ```bash
   sudo pacman -S nvidia-dkms
   ```

::::

## Known Errors and Fixes

:::important
Note that all fixes below may vary depending on the user's specific situation.  
**Make sure to identify the error before copying the commands listed under.**
:::

:::caution **Yay Error: error while loading shared libraries**
- This happens when your Yay repo is very outdated compared to your system, usually happens after a system update, to fix this, simply reinstall yay: 

```bash 
# Remove yay for update
sudo pacman -R yay 

# Install yay from git
cd /tmp
git clone https://aur.archlinux.org/yay-bin.git
cd yay bin 
makepkg -si
cd ..

# Clean /tmp folder 
rm -rf yay-bin
```
:::

:::caution **Pacman Error: mirror not responding**
- This happens when your list of mirrors are too slow or are outdated, this can be fixed by regenerating a list of faster mirrors under the ``/etc/pacman.d/mirrorlist`` file. 
- This can be done by ``reflector``, a package that automatically sorts and gneerates the mirrors by rates and saves on the ``/etc/pacman.d/mirrorlist`` file.

```bash 
# Install reflector
sudo pacman -S reflector

# Example Template: 
sudo reflector --country <country_name> --latest <number of servers from the latest>  --protocol https --sort rate --save /etc/pacman.d/mirrorlist

# Example Use: 
sudo reflector --verbose --sort rate -l 75 --save /etc/pacman.d/mirrorlist
```
:::

:::caution **Signature from "" is unknown trust**
```bash 
# Example fail message: 
error: PackageName: signature from "User <email@archlinux.org>" is invalid
error: failed to commit transaction (invalid or corrupted package (PGP signature))
Errors occurred, no packages were upgraded.
```
- "This occurs because the packager's key used in the package package-name is not present and/or not trusted in the local pacman-key gpg database" - archlinux.org

Fix can be done by: 
   ```bash
   pacman-key refresh-keys
   ```
- If error persists, try regenerating the list of keys by the following: 
```bash 
# Remove the keys
sudo pacman -rm -rf /etc/pacman.d/gnupg

# Re-add the default keys
sudo pacman-key --init 
sudo pacman-key --populate
```   
:::

:::caution **Pacman Error: failed to synchronize all databases (unable to lock database)**
```bash 
Sudo rm /var/lib/pacman/db.lck
```
:::

:::caution **Pacman Error: failed to commit transaction (invalid or corrupted package)**
- This happens when the keyring is outdated due to the lack of use or update of the system. The cause of this error is that it fails to check the package integrity using the PGP signature. To fix this error, simply update the keyrings by:
```bash 
pacman -S archlinux-keyring
```
:::

## Cool Tricks
- Add the line 
```bash 
ILoveCandy
``` 
under ``/etc/pacman.conf`` will give you a cooler download bar!