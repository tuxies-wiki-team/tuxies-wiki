---
title: gnome
createTime: 2025/06/07 16:35:26
permalink: /linux-guides/gnome/
---

:::warning
Bash keyboard script
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
- [Gnome Fuzzy App Search](https://extensions.gnome.org/extension/3956/gnome-fuzzy-app-search/)

KeyBoard Shortcuts (bash setup)
:::code-tabs

@tab bash script
```bash
#!/bin/bash

# Check if running under GNOME
if [[ "$XDG_CURRENT_DESKTOP" != *"GNOME"* ]]; then
    echo "Error: This script requires GNOME desktop."
    exit 1
fi

# Define shortcuts (name, command, binding)
declare -A shortcuts=(
    ["Open Terminal (KGX)"]="kgx '<Super>l'"
    ["Open System Monitor"]="gnome-system-monitor '<Ctrl><Shift>Escape'"
)

# Clear existing custom shortcuts (optional)
gsettings reset org.gnome.settings-daemon.plugins.media-keys custom-keybindings

# Initialize new shortcuts array
new_shortcuts="["
index=0

for name in "${!shortcuts[@]}"; do
    # Extract command and binding
    IFS="'" read -r cmd binding <<< "${shortcuts[$name]}"
    cmd=$(echo "$cmd" | xargs)  # Trim whitespace

    # Define the custom shortcut path
    shortcut_path="/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom$index/"

    # Add to the shortcuts array
    if [[ "$new_shortcuts" != "[" ]]; then
        new_shortcuts+=", "
    fi
    new_shortcuts+="'$shortcut_path'"

    # Apply the shortcut
    gsettings set "org.gnome.settings-daemon.plugins.media-keys.custom-keybinding$shortcut_path" name "'$name'"
    gsettings set "org.gnome.settings-daemon.plugins.media-keys.custom-keybinding$shortcut_path" command "'$cmd'"
    gsettings set "org.gnome.settings-daemon.plugins.media-keys.custom-keybinding$shortcut_path" binding "'$binding'"

    ((index++))
done

new_shortcuts+="]"

# Update GNOME with the new shortcuts
gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings "$new_shortcuts"

echo "Custom shortcuts applied:"
echo "- Super + L       → Open KGX Terminal"
echo "- Ctrl+Shift+Esc  → Open System Monitor"




## Further customization

- Adw-gtk3
- Ocean theme
- Blur My Shell
- Dash To Dock

