---
title: Gnome Guide
createTime: 2025/06/07 16:35:26
permalink: /linux-guides/gnome/
contributors:
  - aier
---

<!-- ::: note Why Gnome?
Gnome is clean and highly functional (though it follows quite a strict and somewhat stubborn philosophy). The Gnome workflow may be quite different compared what you are used to, but once you have gotten the hang of it, you may just fall in love.

==Read over this guide to customise Gnome to your liking!==
::: -->

::::card-grid
:::card title="Read after this" icon="fluent-emoji-flat:open-book"

[aier's Gnome](/guides/aiers-gnome/)

Check out ==more extensions, settings, and tips== to make more out of Gnome!
:::
::::

<!-- ::: info You may have been looking for:
[Linux Guides Homepage](/linux-guides/) to see more distros and desktop environments.

::: -->

## **First steps**

### **Go through the `Settings` app and make some quick tweaks to your needs.**

:::card

- ==Display== — Adjust refresh rate and resolution as needed.
- ==Power== — Change performance mode, show battery %, change suspend behavior, and more.
- ==Multitasking== — Adjust according to your workflow.
- ==Appearance== — You can add your own wallpaper and change to dark mode.
- ==Online Accounts== — You can connect to your online accounts to access calendar, cloud drives, and more within Gnome apps.
- ==Mouse & Trackpad== — You can change pointer sensitivity and turn acceleration on/off.
- ==Keyboard== — Add and modify keyboard shortcuts and change keyboard input settings.
  :::

### **Install some apps for more advanced options**

:::::::card

:::tip You can always use your distro's GUI software store (such as Gnome's `Software` instead of the terminal).
:::

:::tip Install these apps if you wish to unlock settings changes that are not easily accessible with the stock `Settings` app.
:::

:::::collapse accordion

- `Gnome Tweaks`

  ::::card
  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install gnome-tweaks
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S gnome-tweaks
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt install gnome-tweaks
  ```

  :::

  ![Gnome Tweaks](/assets/gnome/gnome-tweaks.png)

  [More details...](/linux-apps/gnomie/#gnome-tweaks)

  ::::

- `Dconf Editor`

  ::::card
  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install dconf-editor
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S dconf-editor
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt install dconf-editor
  ```

  :::

  ![Dconf Editor](/assets/gnome/dconf-editor.png)

  [More details...](/linux-apps/gnomie/#dconf-editor)

  ::::

- `Extension Manager`

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

  ![Extension Manager](/assets/gnome/extension-manager.png)

  [More details...](/linux-apps/gnomie/#extension-manager)
  ::::
  :::::

:::::::

## **Basics**

:::::::card

:::tip All settings in `Gnome Tweaks` can be made through `Dconf Editor` (which you have downloaded), `dconf` (cli), or `gsettings` (cli).
:::

::::details Quick append

:::tabs

@tab ::mdi:terminal:: Append changes (cli)

```bash
dconf write /org/gnome/desktop/wm/preferences/button-layout "':minimize,maximize,close'"
dconf write /org/gnome/desktop/sound/allow-volume-above-100-percent "true"
```

@tab ::mdi:reload:: Reset changes (cli)

```bash
dconf reset /org/gnome/desktop/wm/preferences/button-layout
dconf reset /org/gnome/desktop/sound/allow-volume-above-100-percent
```

:::

::::

::::::collapse accordion

- Enable maximise and minimise title bar buttons

  ::::card

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/preferences/button-layout "':minimize,maximize,close'"
  ```

  @tab ::mdi:puzzle:: Append changes (Gnome Tweaks)

  `Windows` > `Maximise` --> **on**

  `Windows` > `Minimise` --> **on**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/preferences/button-layout
  ```

  :::

  ![Gnome Tweaks Title Bar Settings](/assets/gnome/gnome-tweaks-title-bar-settings.png)

  ::::

- Volume overamplification

  ::::card

  :::info Allows volume from your desktop to be amplified beyond 100% at the cost of distortion.
  :::

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/sound/allow-volume-above-100-percent "true"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/desktop/sound/allow-volume-above-100-percent`

  --> **true**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/sound/allow-volume-above-100-percent
  ```

  :::

  ::::

::::::

:::::::

### **Append useful keyboard shortcuts**

:::::::card

:::tip All following settings can be appended through `Dconf Editor`, `dconf`, and `gsettings`.
:::

:::::details Quick append & shortcut cheatsheet (safe)

Use the following to append all keyboard shortcuts covered in this section.

::::tabs

@tab ::mdi:terminal:: Append changes (cli)

```bash
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-left "['<Control><Super>Left', '<Super>Page_Up']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-right "['<Control><Super>Right', '<Super>Page_Down']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-left "['<Super>bracketleft']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-right "['<Super>bracketright']"
dconf write /org/gnome/desktop/wm/keybindings/switch-windows "['<Alt>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-windows-backward "['<Alt><Shift>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications "['<Super>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications-backward "['<Super><Shift>Tab']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/control-center "['<Super>I', '<Super>semicolon']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/home "['<Super>E']"
dconf write /org/gnome/desktop/wm/keybindings/panel-run-dialog "['<Super>R']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-center "['<Super><Shift>Return']"
dconf write /org/gnome/desktop/wm/keybindings/toggle-fullscreen "['<Super>F']"
dconf write /org/gnome/desktop/wm/keybindings/close "['<Super>X', '<Alt>F4']"
```

@tab ::mdi:reload:: Reset changes (cli)

```bash
dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-left
dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-right
dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-left
dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-right
dconf reset /org/gnome/desktop/wm/keybindings/switch-windows
dconf reset /org/gnome/desktop/wm/keybindings/switch-windows-backward
dconf reset /org/gnome/desktop/wm/keybindings/switch-applications
dconf reset /org/gnome/desktop/wm/keybindings/switch-applications-backward
dconf reset /org/gnome/settings-daemon/plugins/media-keys/control-center
dconf reset /org/gnome/settings-daemon/plugins/media-keys/home
dconf reset /org/gnome/desktop/wm/keybindings/panel-run-dialog
dconf reset /org/gnome/desktop/wm/keybindings/move-to-center
dconf reset /org/gnome/desktop/wm/keybindings/toggle-fullscreen
dconf reset /org/gnome/desktop/wm/keybindings/close
```

::::

| Keybinding                     | Shortcut                                     |
| ------------------------------ | -------------------------------------------- |
| `Ctrl` + `Super` + `Arrow`     | Switch workspaces                            |
| `Super` + `Bracket`            | Move a window to the workspace left or right |
| `Alt` + `Tab`                  | Switch windows                               |
| `Super` + `Tab`                | Switch apps                                  |
| `Super` + `I` or `Super` + `;` | Launch `Settings` app                        |
| `Super` + `E`                  | Launch home folder                           |
| `Super` + `R`                  | Run command dialog                           |
| `Super` + `Shift` + `Return`   | Centre window                                |
| `Super` + `F`                  | Fullscreen window                            |
| `Super` + `X`                  | Close window                                 |

:::::

:::::details Quick append & shortcut cheatsheet (all)

Use the following to append all keyboard shortcuts covered in this section. Keep in mind that some shortcuts would not be valid as you may need to install dependencies. Finish reading this section to learn more.

:::caution Quick append will erase ALL shortcuts you've appended in the custom section!
:::

::::tabs

@tab ::mdi:terminal:: Append changes (cli)

```bash
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-left "['<Control><Super>Left', '<Super>Page_Up']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-right "['<Control><Super>Right', '<Super>Page_Down']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-left "['<Super>bracketleft']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-right "['<Super>bracketright']"
dconf write /org/gnome/desktop/wm/keybindings/switch-windows "['<Alt>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-windows-backward "['<Alt><Shift>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications "['<Super>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications-backward "['<Super><Shift>Tab']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/control-center "['<Super>I', '<Super>semicolon']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/home "['<Super>E']"
dconf write /org/gnome/desktop/wm/keybindings/panel-run-dialog "['<Super>R']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings "['/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis/','/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center/']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis/binding "'<Super>Return'"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis/command "'ptyxis'"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis/name "'Launch Ptyxis'"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings "['/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis/','/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center/']"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center/binding "'<Control><Shift>Escape'"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center/command "'flatpak run io.missioncenter.MissionCenter'"
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center/name "'Launch Mission Center'"
dconf write /org/gnome/desktop/wm/keybindings/move-to-center "['<Super><Shift>Return']"
dconf write /org/gnome/desktop/wm/keybindings/toggle-fullscreen "['<Super>F']"
dconf write /org/gnome/desktop/wm/keybindings/close "['<Super>X', '<Alt>F4']"
flatpak install io.missioncenter.MissionCenter -y
```

@tab ::mdi:reload:: Reset changes (cli)

```bash
dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-left
dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-right
dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-left
dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-right
dconf reset /org/gnome/desktop/wm/keybindings/switch-windows
dconf reset /org/gnome/desktop/wm/keybindings/switch-windows-backward
dconf reset /org/gnome/desktop/wm/keybindings/switch-applications
dconf reset /org/gnome/desktop/wm/keybindings/switch-applications-backward
dconf reset /org/gnome/settings-daemon/plugins/media-keys/control-center
dconf reset /org/gnome/settings-daemon/plugins/media-keys/home
dconf reset /org/gnome/desktop/wm/keybindings/panel-run-dialog
dconf reset /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-ptyxis
dconf reset /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/launch-mission-center
dconf reset /org/gnome/desktop/wm/keybindings/move-to-center
dconf reset /org/gnome/desktop/wm/keybindings/toggle-fullscreen
dconf reset /org/gnome/desktop/wm/keybindings/close
```

::::

| Keybinding                     | Shortcut                                     |
| ------------------------------ | -------------------------------------------- |
| `Ctrl` + `Super` + `Arrow`     | Switch workspaces                            |
| `Super` + `Bracket`            | Move a window to the workspace left or right |
| `Alt` + `Tab`                  | Switch windows                               |
| `Super` + `Tab`                | Switch apps                                  |
| `Super` + `I` or `Super` + `;` | Launch `Settings` app                        |
| `Super` + `E`                  | Launch home folder                           |
| `Super` + `R`                  | Run command dialog                           |
| `Super` + `Return`             | Launch `Ptyxis` terminal                     |
| `Ctrl` + `Shift` + `Esc`       | Launch `Mission Center`                      |
| `Super` + `Shift` + `Return`   | Centre window                                |
| `Super` + `F`                  | Fullscreen window                            |
| `Super` + `X`                  | Close window                                 |

:::::

::::::collapse accordion

- Switch workspaces (Windows-like)

  :::::card

  `Ctrl` + `Super` + `Arrow`
  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  # Also preserving the original keybinding
  # <Super>Page_Up/Page_Down here because it is
  # quite useful on a full-sized keyboard.
  dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-left "['<Control><Super>Left', '<Super>Page_Up']"
  dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-right "['<Control><Super>Right', '<Super>Page_Down']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/desktop/wm/keybindings/switch-to-workspace-left`

  --> **\['\<Control\>\<Super\>Left'\]**

  `/org/gnome/desktop/wm/keybindings/switch-to-workspace-right`

  --> **\['\<Control\>\<Super\>Right'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-left
  dconf reset /org/gnome/desktop/wm/keybindings/switch-to-workspace-right
  ```

  :::

  :::::

- Move a window to the workspace left or right

  :::::card

  `Super` + `[`

  `Super` + `]`

  ::::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-left "['<Super>bracketleft']"
  dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-right "['<Super>bracketright']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/desktop/wm/keybindings/move-to-workspace-left`

  --> **\['\<Super\>bracketleft'\]**

  `/org/gnome/desktop/wm/keybindings/move-to-workspace-right`

  --> **\['\<Super\>bracketright'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-left
  dconf reset /org/gnome/desktop/wm/keybindings/move-to-workspace-right
  ```

  ::::

  :::::

- More powerful `Alt–Tab` and `Super–Tab`

  :::::card

  `Alt` + `Tab` switches windows

  `Super` + `Tab` switches apps

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/switch-windows "['<Alt>Tab']"
  dconf write /org/gnome/desktop/wm/keybindings/switch-windows-backward "['<Alt><Shift>Tab']"
  dconf write /org/gnome/desktop/wm/keybindings/switch-applications "['<Super>Tab']"
  dconf write /org/gnome/desktop/wm/keybindings/switch-applications-backward "['<Super><Shift>Tab']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/desktop/wm/keybindings/switch-windows`

  --> **\['\<Alt\>Tab'\]**

  `/org/gnome/desktop/wm/keybindings/switch-windows-backward`

  --> **\['\<Alt\>\<Shift\>Tab'\]**

  `/org/gnome/desktop/wm/keybindings/switch-applications`

  --> **\['\<Super\>Tab'\]**

  `/org/gnome/desktop/wm/keybindings/switch-applications-backward`

  --> **\['\<Super\>\<Shift\>Tab'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/switch-windows
  dconf reset /org/gnome/desktop/wm/keybindings/switch-windows-backward
  dconf reset /org/gnome/desktop/wm/keybindings/switch-applications
  dconf reset /org/gnome/desktop/wm/keybindings/switch-applications-backward
  ```

  :::

  :::::

- Launch `Settings` app (Windows-like)

  :::::card

  Because `Super` + `I` may not work due to interference with other shortcuts, `Super` + `;` is also provided here.

  `Super` + `I`

  `Super` + `;`

  ::::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/settings-daemon/plugins/media-keys/control-center "['<Super>I', '<Super>semicolon']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/settings-daemon/plugins/media-keys/control-center`

  --> **\['\<Super\>I', '\<Super\>semicolon'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/settings-daemon/plugins/media-keys/control-center
  ```

  ::::

  :::::

- Launch home folder (Windows-like)

  :::::card

  `Super` + `E`

  ::::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/settings-daemon/plugins/media-keys/home "['<Super>E']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/settings-daemon/plugins/media-keys/home`

  --> **\['\<Super\>E'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/settings-daemon/plugins/media-keys/home
  ```

  ::::

  :::::

- Run command dialog (Windows-like)

  :::::card

  `Super` + `R`

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/panel-run-dialog "['<Super>R']"
  ```

  @tab ::mdi:file-settings:: Append changes (Dconf Editor)

  `/org/gnome/desktop/wm/keybindings/panel-run-dialog`

  --> **\['\<Super\>R'\]**

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/panel-run-dialog
  ```

  :::

- Centre window

  :::::card

  `Super` + `Shift` + `Return`

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/move-to-center "['<Super><Shift>Return']"
  ```

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/move-to-center
  ```

  :::

  :::::

- Toggle fullscreen (universal)

  :::::card

  `Super` + `F`

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/toggle-fullscreen "['<Super>F']"
  ```

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/toggle-fullscreen
  ```

  :::

  :::::

- Close window (ergonomic)

  :::::card

  `Super` + `X`

  :::tabs

  @tab ::mdi:terminal:: Append changes (cli)

  ```bash
  dconf write /org/gnome/desktop/wm/keybindings/close "['<Super>X', '<Alt>F4']"
  ```

  @tab ::mdi:reload:: Reset changes (cli)

  ```bash
  dconf reset /org/gnome/desktop/wm/keybindings/close
  ```

  :::

  :::::

  ::::::

:::caution Appending the following changes will override all shortcuts you've added in the `Settings`'s custom section. It is suggested that you append them manually through the `Gnome Settings` app --> `Keyboard` --> `View and Customise Keyboard Shortcuts` section instead if you have existing custom shortcuts.
:::

::::::collapse accordion

- Launch `Ptyxis` Terminal

  ::::card

  `Super` + `Return`

  ==Install dependencies==

  :::tabs

  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install ptyxis
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  pacman -S ptyxis
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt install ptyxis
  ```

  :::

- Launch `Mission Center` (Windows-like)

  :::::card

  `Ctrl` + `Shft` + `Esc`

  ==Install dependencies==

  ::::tabs

  @tab Flatpak (System)

  ```bash
  flatpak install flathub io.missioncenter.MissionCenter
  ```

  @tab Flatpak (User)

  ```bash
  flatpak install --user flathub io.missioncenter.MissionCenter
  ```

  ::::

  :::::

::::::
