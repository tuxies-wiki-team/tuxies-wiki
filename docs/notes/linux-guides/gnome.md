---
title: Gnome Guide
createTime: 2025/06/07 16:35:26
permalink: /linux-guides/gnome/
---

::::card-grid

:::card title="Maintainer" icon="mdi:account"
aier
:::

:::card title="Contributors" icon="mdi:account-multiple"
Lunear
:::

::::


:::warning Under Construction

TODO:

- [ ] Bash keyboard script

:::

:::tip Why Gnome?
Gnome is clean and highly functional (though it follows quite a strict and somehow stubborn philosophy). The Gnome workflow may be quite different compared what you are used to, but once you have gotten the hang of it, you may just fall in love.

Read over this guide to customize Gnome to **your** liking!
:::

:::note Haven't decided on a distro yet?
Check out [Linux Guides](../linux-guides/README.md) to learn more about distros.
:::

## First steps

### Go through the settings app and make some quick tweaks to your needs.

Here are some settings I'd recommend checking out:

- **_Display_** — Adjust refresh rate and resolution as needed.
- **_Power_** — Change performance mode, show battery %, change suspend behavior, and more.
- **_Multitasking_** — Adjust according to your workflow.
- **_Appearance_** — You can add your own wallpaper and change to dark mode.
- **_Online Accounts_** — You can connect to your online accounts to access calendar, cloud drives, and more within Gnome apps.
- **_Mouse & Trackpad_** — You can change pointer sensitivity and turn acceleration on/off.
- **_Keyboard_** — Add and modify keyboard shortcuts and change keyboard input settings.

### Install some apps for more advanced options

:::tip You can always use your distro's GUI software store (such as Gnome's **Software** instead of the terminal).
:::

Install these apps if you wish to unlock settings changes that are not easily accessible with the stock Settings app.

You'll need:

:::::collapse accordion

- Gnome Tweaks

  ::::card
  :::tabs

  @tab Debian/Ubuntu

  ```bash
  sudo apt install gnome-tweaks
  ```

  @tab Fedora

  ```bash
  sudo dnf install gnome-tweaks
  ```

  @tab Arch

  ```bash
  sudo pacman -S gnome-tweaks
  ```

  :::

  ![Gnome Tweaks](./assets/gnome-tweaks.png)

  [More details...](../linux-apps/gnomie.md#gnome-tweaks)

  ::::

- Dconf Editor

  ::::card
  :::tabs

  @tab Debian/Ubuntu

  ```bash
  sudo apt install dconf-editor
  ```

  @tab Fedora

  ```bash
  sudo dnf install dconf-editor
  ```

  @tab Arch

  ```bash
  sudo pacman -S dconf-editor
  ```

  :::

  ![Dconf Editor](./assets/dconf-editor.png)

  [More details...](../linux-apps/gnomie.md#dconf-editor)

  ::::

- Extension Manager

  ::::card

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

  ![Extension Manager](./assets/extension-manager.png)

  [More details...](../linux-apps/gnomie.md#extension-manager)
  ::::
  :::::

## Highly recommended tweaks

### Gnome Tweaks

- [ ] Enable titlebar buttons
- [ ] Text hinting full

### Useful extensions

- [ ] [Launch New Instance](https://extensions.gnome.org/extension/600/launch-new-instance/)
- [ ] [Appindicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/)
- [ ] [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
- [ ] [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)
- [ ] [Gnome Fuzzy App Search](https://extensions.gnome.org/extension/3956/gnome-fuzzy-app-search/)
- [ ] [Dash To Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)

### Keyboard shortcuts

- [ ] Changing workspaces
- [ ] Windows-like Alt-Tab, distinct Super-Tab behavior
- [ ] Command dialog
- [ ] Open sceenshot dialog

With dependencies

- [ ] Ptyxis
- [ ] Mission Center
- [ ] Clipboard Indicator

::::collapse

- Gnome keyboard shortcuts cheat-sheet.

::::

## Advanced tweaks w/ Dconf Editor

## Ricing

### Extensions

- Adw-gtk3
- Ocean theme
- Blur My Shell

<!-- KeyBoard Shortcuts (bash setup)
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
```

::: -->
