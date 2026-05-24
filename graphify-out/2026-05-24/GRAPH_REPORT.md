# Graph Report - .  (2026-05-23)

## Corpus Check
- Large corpus: 111 files · ~1,289,456 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 345 nodes · 338 edges · 65 communities (33 shown, 32 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Kando Menu Config|Kando Menu Config]]
- [[_COMMUNITY_VuePress Build System|VuePress Build System]]
- [[_COMMUNITY_Linux Apps Library|Linux Apps Library]]
- [[_COMMUNITY_Linux Distros & Vocabulary|Linux Distros & Vocabulary]]
- [[_COMMUNITY_Logitech Peripheral Setup|Logitech Peripheral Setup]]
- [[_COMMUNITY_GNOME Desktop Screenshots|GNOME Desktop Screenshots]]
- [[_COMMUNITY_Core Linux Concepts|Core Linux Concepts]]
- [[_COMMUNITY_Tuxies Branding Assets|Tuxies Branding Assets]]
- [[_COMMUNITY_Core Guides & Contributors|Core Guides & Contributors]]
- [[_COMMUNITY_Wiki Meta & Contributions|Wiki Meta & Contributions]]
- [[_COMMUNITY_Fedora & Timeshift Backup|Fedora & Timeshift Backup]]
- [[_COMMUNITY_Peripheral & Package Tools|Peripheral & Package Tools]]
- [[_COMMUNITY_Terminal Customization|Terminal Customization]]
- [[_COMMUNITY_GNOME Font Rendering|GNOME Font Rendering]]
- [[_COMMUNITY_GNOME Window Tweaks|GNOME Window Tweaks]]
- [[_COMMUNITY_Clipboard Extensions|Clipboard Extensions]]
- [[_COMMUNITY_GNOME Extension Reference|GNOME Extension Reference]]
- [[_COMMUNITY_Wiki Style Guidelines|Wiki Style Guidelines]]
- [[_COMMUNITY_Zen Browser|Zen Browser]]
- [[_COMMUNITY_Dock Extensions|Dock Extensions]]
- [[_COMMUNITY_Extension Manager|Extension Manager]]
- [[_COMMUNITY_Kando Menu Settings|Kando Menu Settings]]
- [[_COMMUNITY_Solaar Device Config|Solaar Device Config]]
- [[_COMMUNITY_Lock Keys Indicator|Lock Keys Indicator]]
- [[_COMMUNITY_Custom Reboot Dual Boot|Custom Reboot Dual Boot]]
- [[_COMMUNITY_dconf Editor Keybindings|dconf Editor Keybindings]]
- [[_COMMUNITY_Windows Dev Setup|Windows Dev Setup]]
- [[_COMMUNITY_Firefox Profile & Zen|Firefox Profile & Zen]]
- [[_COMMUNITY_VuePress Navbar Config|VuePress Navbar Config]]
- [[_COMMUNITY_Kando Theme Colors|Kando Theme Colors]]
- [[_COMMUNITY_Misc Group 30|Misc Group 30]]
- [[_COMMUNITY_Misc Group 31|Misc Group 31]]
- [[_COMMUNITY_Misc Group 32|Misc Group 32]]
- [[_COMMUNITY_Misc Group 33|Misc Group 33]]
- [[_COMMUNITY_Misc Group 34|Misc Group 34]]
- [[_COMMUNITY_Misc Group 35|Misc Group 35]]
- [[_COMMUNITY_Misc Group 36|Misc Group 36]]
- [[_COMMUNITY_Misc Group 37|Misc Group 37]]
- [[_COMMUNITY_Misc Group 38|Misc Group 38]]
- [[_COMMUNITY_Misc Group 39|Misc Group 39]]
- [[_COMMUNITY_Misc Group 40|Misc Group 40]]
- [[_COMMUNITY_Misc Group 41|Misc Group 41]]
- [[_COMMUNITY_Misc Group 42|Misc Group 42]]
- [[_COMMUNITY_Misc Group 43|Misc Group 43]]
- [[_COMMUNITY_Misc Group 44|Misc Group 44]]
- [[_COMMUNITY_Misc Group 45|Misc Group 45]]
- [[_COMMUNITY_Misc Group 46|Misc Group 46]]
- [[_COMMUNITY_Misc Group 47|Misc Group 47]]
- [[_COMMUNITY_Misc Group 48|Misc Group 48]]
- [[_COMMUNITY_Misc Group 49|Misc Group 49]]
- [[_COMMUNITY_Misc Group 50|Misc Group 50]]
- [[_COMMUNITY_Misc Group 51|Misc Group 51]]
- [[_COMMUNITY_Misc Group 56|Misc Group 56]]
- [[_COMMUNITY_Misc Group 57|Misc Group 57]]
- [[_COMMUNITY_Misc Group 58|Misc Group 58]]
- [[_COMMUNITY_Misc Group 59|Misc Group 59]]
- [[_COMMUNITY_Misc Group 60|Misc Group 60]]
- [[_COMMUNITY_Misc Group 61|Misc Group 61]]
- [[_COMMUNITY_Misc Group 62|Misc Group 62]]
- [[_COMMUNITY_Misc Group 63|Misc Group 63]]
- [[_COMMUNITY_Misc Group 64|Misc Group 64]]

## God Nodes (most connected - your core abstractions)
1. `Linux Vocabulary Guide` - 12 edges
2. `Editor's Choice Apps Guide` - 11 edges
3. `scripts` - 10 edges
4. `Gnome Setup and Customisation Guide` - 9 edges
5. `Arch Linux Installation Guide` - 8 edges
6. `Gnomie Apps Guide` - 6 edges
7. `GNOME Desktop Environment` - 6 edges
8. `User-defined Rules` - 6 edges
9. `GNOME Desktop Environment` - 5 edges
10. `Flatpak` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Tuxies Wiki Homepage (VuePress)` --references--> `Tuxies Wiki – Linux Newcomer Resource`  [EXTRACTED]
  docs/README.md → README.md
- `Arch Linux Installation Guide` --references--> `GParted`  [EXTRACTED]
  docs/notes/linux-guides/arch.md → docs/notes/linux-apps/popular.md
- `Gnome Setup and Customisation Guide` --references--> `Mission Center`  [EXTRACTED]
  docs/notes/linux-guides/gnome.md → docs/notes/linux-apps/editors-choice.md
- `Clipboard Indicator GNOME Extension` --semantically_similar_to--> `Copyous GNOME Extension (Categorized Clipboard)`  [INFERRED] [semantically similar]
  docs/.vuepress/public/assets/aiers-gnome/clipboard-indicator-demonstration.png → docs/.vuepress/public/assets/aiers-gnome/copyous-demo.png
- `Logitech Linux Setup Guide` --conceptually_related_to--> `Key Remapping with keyd`  [INFERRED]
  docs/guides/logitech-linux-setup.md → docs/guides/key-remapping-with-keyd.md

## Hyperedges (group relationships)
- **Core Tuxies Wiki Guides** — guides_aiers_gnome, guides_logitech_linux_setup, guides_terminal_customisation_bash, guides_firefox_userjs [INFERRED 0.85]

## Communities (65 total, 32 thin omitted)

### Community 0 - "Kando Menu Config"
Cohesion: 0.04
Nodes (48): centerDeadZone, darkMenuTheme, darkMenuThemeColors, dragThreshold, enableAchievementNotifications, enableAchievements, enableDarkModeForMenuThemes, enableGamepad (+40 more)

### Community 1 - "VuePress Build System"
Cohesion: 0.07
Nodes (27): description, devDependencies, cross-env, gh-pages, http-server, sass-embedded, typescript, vue (+19 more)

### Community 2 - "Linux Apps Library"
Cohesion: 0.11
Nodes (24): Flatpak, Blender, Creative Software Guide, Darktable, Inkscape, Bitwarden, Editor's Choice Apps Guide, Gradia (+16 more)

### Community 3 - "Linux Distros & Vocabulary"
Cohesion: 0.13
Nodes (23): Arch Linux Distribution, Debian Linux Distribution, Linux Distributions (Distros), Fedora Linux Distribution, GNOME Desktop Environment, Timeshift, Clipboard Indicator, Dconf Editor (+15 more)

### Community 4 - "Logitech Peripheral Setup"
Cohesion: 0.16
Nodes (15): Kando, Kando Pie Menu UI, Primary Menu, Bolt Receiver, MX Keys S, MX Master 4, Pair New Device Button, Solaar (+7 more)

### Community 5 - "GNOME Desktop Screenshots"
Cohesion: 0.17
Nodes (16): GNOME Activities Overview, GNOME Bottom Dock, GNOME Desktop Environment, Linux Desktop Environment, Nautilus File Manager, About KDE Dialog, Dolphin File Manager, KDE Plasma Desktop Environment (+8 more)

### Community 6 - "Core Linux Concepts"
Cohesion: 0.17
Nodes (13): DE — Desktop Environment, FOSS (Free and Open-Source Software), GNU/Linux, KDE Plasma Desktop Environment, Linux Kernel, Linux Vocabulary Guide, OS (Operating System), Package Manager (+5 more)

### Community 7 - "Tuxies Branding Assets"
Cohesion: 0.24
Nodes (10): Tuxies Logo Inkscape Source (SVG), Tux Open Graph Image (SVG), Tuxie Mascot SVG (Inkscape), Tux Transparent Background (SVG), Tuxie Mascot (PNG), Tuxies Wiki Logo (PNG), Tux Linux Mascot, Tux Wearing Tuxedo (Visual Motif) (+2 more)

### Community 8 - "Core Guides & Contributors"
Cohesion: 0.25
Nodes (9): Our Team Page, Bash Prompt Customization (PS1), Fastfetch – System Info Display, GNOME Desktop Environment, aier's GNOME In-Depth Tips and Tricks, Better Text Rendering GNOME HiDPI Guide, Terminal Customisation (Bash) Guide, aier (Wiki Founder) (+1 more)

### Community 9 - "Wiki Meta & Contributions"
Cohesion: 0.22
Nodes (9): Contributions Overview, Dev Setup Guide (Contributions), Contribution Guidelines, Tuxies Wiki – Linux Newcomer Resource, VuePress + Plume Theme (Wiki Platform), Tuxies Wiki Homepage (VuePress), VuePress Guide, New to the Wiki Introduction (+1 more)

### Community 10 - "Fedora & Timeshift Backup"
Cohesion: 0.36
Nodes (9): Fedora update guide, GNOME Software, gnome-software-update.svg, Timeshift restore workflow, rsync backend, Timeshift, timeshift-restore-snapshot.png, Timeshift snapshot scheduling (+1 more)

### Community 11 - "Peripheral & Package Tools"
Cohesion: 0.29
Nodes (8): Flathub – Flatpak App Repository, Flatpak – Universal Linux Package Manager, Kando – Pie Menu Launcher, keyd – Key Remapping Daemon, Solaar – Logitech Device Manager, Key Remapping with keyd, Logitech Linux Setup Guide, Flatpak Setup Guide

### Community 12 - "Terminal Customization"
Cohesion: 0.50
Nodes (8): aesthetic-terminal.png, fastfetch, Fedora Linux 42, GNOME Theming Stack, Ptyxis Terminal Emulator, Bash PS1 Prompt, custom-ps1.png, fastfetch.png

### Community 13 - "GNOME Font Rendering"
Cohesion: 0.40
Nodes (5): GNOME Tweaks Font Rendering Settings Screenshot, Adwaita Mono Font, Font Antialiasing – Standard Grayscale, Font Hinting – Slight, GNOME Tweaks – Fonts Panel

### Community 14 - "GNOME Window Tweaks"
Cohesion: 0.40
Nodes (5): GNOME Center New Windows Setting, GNOME Titlebar Buttons (Maximize/Minimize), GNOME Tweaks – Windows Panel, GNOME Titlebar Button Placement Right, GNOME Tweaks Windows Settings Screenshot

### Community 15 - "Clipboard Extensions"
Cohesion: 0.50
Nodes (4): Clipboard Indicator Extension Demo Screenshot, Copyous Extension Demo Screenshot, Clipboard Indicator GNOME Extension, Copyous GNOME Extension (Categorized Clipboard)

### Community 16 - "GNOME Extension Reference"
Cohesion: 0.50
Nodes (4): GNOME Extensions Reference Page, AppIndicator Extension Screenshot, Caffeine Extension Screenshot, Clipboard Indicator Extension Screenshot

### Community 17 - "Wiki Style Guidelines"
Cohesion: 0.50
Nodes (4): Wiki H2/H3 Heading Hierarchy Style, Wiki Highlight Color Conventions (7 types), Wiki Heading Style Demo Screenshot, Wiki Highlighting Style Demo Screenshot

### Community 18 - "Zen Browser"
Cohesion: 0.50
Nodes (4): Zen Browser – Privacy-Focused Browser, Zen Browser Vertical Tab Sidebar, Zen Browser Workspace Support, Zen Browser Demo Screenshot

### Community 19 - "Dock Extensions"
Cohesion: 0.50
Nodes (4): Dash to Dock GNOME Extension, Dash to Panel GNOME Extension, Dash to Dock Extension Screenshot, Dash to Panel Extension Screenshot

### Community 20 - "Extension Manager"
Cohesion: 0.50
Nodes (4): Extension Manager App (GNOME Extensions GUI), Installed GNOME Extensions Set, GNOME Extension Manager Screenshot, GNOME Fuzzy App Search Screenshot

### Community 21 - "Kando Menu Settings"
Cohesion: 0.50
Nodes (3): collections, menus, version

### Community 22 - "Solaar Device Config"
Cohesion: 0.67
Nodes (4): MX KEYS S Keyboard Device, MX Master 4 Mouse Device, Solaar Config (Logitech Linux Setup), Solaar Rules (Logitech Linux Key Mappings)

### Community 23 - "Lock Keys Indicator"
Cohesion: 0.67
Nodes (3): Lock Keys Extension Demo Screenshot, GNOME Top Panel Indicators, Lock Keys GNOME Extension

### Community 24 - "Custom Reboot Dual Boot"
Cohesion: 0.67
Nodes (3): Custom Reboot Extension Demo Screenshot, Custom Reboot GNOME Extension (Dual Boot), Dual Boot Windows + Fedora

### Community 25 - "dconf Editor Keybindings"
Cohesion: 0.67
Nodes (3): dconf Editor – Low-Level GNOME Config, GNOME Mutter Keybindings (org.gnome.mutter), dconf Editor GNOME Keybindings Screenshot

### Community 26 - "Windows Dev Setup"
Cohesion: 0.67
Nodes (3): Tuxies Wiki Developer Setup, Windows File Explorer – Open in Terminal, Windows Developer Setup Screenshot

### Community 27 - "Firefox Profile & Zen"
Cohesion: 1.00
Nodes (3): Firefox/Zen Profile Directory for user.js, Zen Browser (Firefox Fork), Firefox Profile Directory Screenshot (Zen Browser)

### Community 29 - "Kando Theme Colors"
Cohesion: 0.67
Nodes (3): action-icon-color, menuThemeColors, clean-circle

## Knowledge Gaps
- **197 isolated node(s):** `name`, `type`, `version`, `description`, `license` (+192 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Linux Vocabulary Guide` connect `Core Linux Concepts` to `Linux Apps Library`, `Linux Distros & Vocabulary`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `Gnome Setup and Customisation Guide` connect `Linux Distros & Vocabulary` to `Linux Apps Library`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _197 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Kando Menu Config` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `VuePress Build System` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Linux Apps Library` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Should `Linux Distros & Vocabulary` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._