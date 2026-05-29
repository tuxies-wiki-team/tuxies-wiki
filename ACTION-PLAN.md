# Guide Audit — Action Plan

Checklist of issues found while reviewing the guides for malpractices. Work top to
bottom; the **Arch guide is saved for last** as it is the most error-dense.

Legend: 🔴 dangerous / data-loss · 🟠 broken command · 🟡 missing step / gap · 🔵 style

---

## Non-Arch guides

### `notes/linux-apps/editors-choice.md`

- [x] 🔴 **L227** — `curl https://repo.waydro.id | sudo bash` pipes a remote script into root. Split into download → review → run, or add an explicit risk note.
- [x] 🔴 **L220** — `sudo yay -S waydroid`: AUR helpers must not run under `sudo`. Change to `yay -S waydroid`.

### `guides/terminal-customisation-bash.md`

- [x] 🟠 **L157** — Malformed `PS1`: `[$(tput setaf 56)\]` has an unbalanced escape (stray `\]`, missing `\[`). Causes readline width miscount / cursor corruption. Match the correctly-escaped preview at L89.
- [x] 🟠 **L337** — Contradictory `eza` step: note says `dnf` install is impossible on Fedora 42, but the command is `sudo dnf install eza`. Reconcile the two.

### `guides/rb-14-2023-fedora.md`

- [x] 🟡 **L88-139** — Dispatcher script body is shown but never saved; L139 chmods `/etc/NetworkManager/dispatcher.d/99-fix-wifi`, a file the reader was never told to create. Add the create/paste step (and note NM ignores group/world-writable scripts).
- [x] 🔵 **L10** — Uses an H1; guidelines say H1 should be rare. Demote to H2.

### `guides/ssh-guide.md`

- [x] 🟡 **L72-74** — `apt install fail2ban` and the `echo … >> paths-debian.conf` run without `sudo` (will fail as a normal user); rest of guide uses `sudo`.
- [x] 🟡 **L73** — Editing `paths-debian.conf` directly is fragile; prefer a `jail.local` override (survives upgrades).
- [x] 🟡 **L64** — `systemctl restart sshd`: on Debian/Ubuntu (this guide's target) the unit is `ssh`.

### `guides/key-remapping-with-keyd.md`

- [x] 🔵 **L86** — Heading already reads "Configuring keyd" (typo not present in current file). Extra: also bolded two unbolded headings in this file (L133 `Applying a configuration`, L147 `Registering keyd as an Internal Keyboard`).

### `guides/microsoft-edge-setup.md`

- [x] 🔵 **L49, L78** — Headings `## Enable Touchpad Gestures` / `## Fix Web App Icons` not bolded per the H2/H3 bold rule.

---

## `notes/linux-guides/arch.md` (do last)

- [x] 🔴 **L719** — `docker system prune -a --volumes` under "clearing cache" deletes real data volumes. Drop `--volumes` or add a loud warning.
- [x] 🔴 **L336-338** — Casual `rm -rf /boot/<directory-of-bootloader>` is high-risk; also the enclosing `:::important` block is never closed (breaks rendering).
- [x] 🟠 **L208-211** — Timezone symlink missing space before `/etc/localtime`; zone is `America/Caracas`, not `Americas/Caracas`.
- [x] 🟠 **L223-231** — Localisation edits `/etc/locale.conf` but should uncomment locales in `/etc/locale.gen`.
- [x] 🟠 **L485** — `unname -r` → `uname -r`.
- [x] 🟠 **L521** — `cd yay bin` → `cd yay-bin`.
- [x] 🟠 **L559** — `pacman-key refresh-keys` → `pacman-key --refresh-keys`.
- [x] 🟠 **L330** — `--efi-directory= <dir>` has a stray space; should be `--efi-directory=<dir>`.
- [x] 🔵 **L291** — `Defaults timestamp_timeout=0` recommended as default forces a password on every `sudo`; present as an option, not the default.
- [x] 🔵 **L220** — Stray third `=` in `===This command assumes…` (broken highlight markup).
- [x] 🔵 **L53-54** — "Arch is not for you" gatekeeping tone + "If not network adapter" typo; clash with the professional-language guideline.
- [x] 🔵 — Headings missing bold keywords per the H2/H3 bold rule. (Bolded `## Known errors and fixes` at L501; also fixed `System Maintainance` → `System Maintenance`.)

---

## After all fixes

- [ ] Run `graphify update .` to keep the knowledge graph current.
