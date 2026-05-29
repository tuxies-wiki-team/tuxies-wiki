# Guide Audit — Action Plan

Checklist of issues found while reviewing the guides for malpractices. Work top to
bottom; the **Arch guide is saved for last** as it is the most error-dense.

Legend: 🔴 dangerous / data-loss · 🟠 broken command · 🟡 missing step / gap · 🔵 style

**Status:** Non-Arch guides done (except SSH). `arch.md` and `ssh-guide.md` were drafted
then reverted and are **handed off** to another engineer — see the ⚠️ HANDED OFF notes
below. Their original edits were discarded, so those files are back to their pre-audit state.

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

### `guides/ssh-guide.md` ⚠️ HANDED OFF — NOT YET FIXED

> **Handoff note (for the next engineer + AI agent):** Edits to this file were drafted
> but **discarded/reverted** — the original author is not confident enough in the SSH/
> fail2ban specifics to land them. The three items below are **still open**. Please verify
> against the guide's actual target distro (Debian/Ubuntu, per the frontmatter and `apt`
> usage) before changing anything. Suggested fixes from the audit are noted inline, but
> treat them as proposals, not gospel — confirm on a real Debian/Ubuntu box first.

- [ ] 🟡 **L72-74** — `apt install fail2ban` and the `echo … >> paths-debian.conf` run without `sudo` (will fail as a normal user); rest of guide uses `sudo`. *Proposed:* add `sudo` to the install/restart.
- [ ] 🟡 **L73** — Editing `paths-debian.conf` directly is fragile; prefer a `jail.local` override (survives upgrades). *Proposed:* write `[sshd]\nenabled = true\nbackend = systemd` to `/etc/fail2ban/jail.local` via `sudo tee`. ⚠️ Verify the correct jail/backend keys for the target fail2ban version.
- [ ] 🟡 **L64** — `systemctl restart sshd`: on Debian/Ubuntu the unit is typically `ssh` (with `sshd.service` aliased). *Proposed:* `sudo systemctl restart ssh`. ⚠️ Confirm the unit name on the target distro.

### `guides/key-remapping-with-keyd.md`

- [x] 🔵 **L86** — Heading already reads "Configuring keyd" (typo not present in current file). Extra: also bolded two unbolded headings in this file (L133 `Applying a configuration`, L147 `Registering keyd as an Internal Keyboard`).

### `guides/microsoft-edge-setup.md`

- [x] 🔵 **L49, L78** — Headings `## Enable Touchpad Gestures` / `## Fix Web App Icons` not bolded per the H2/H3 bold rule.

---

## `notes/linux-guides/arch.md` ⚠️ HANDED OFF — NOT YET FIXED

> **Handoff note (for the next engineer + AI agent):** This was the most error-dense file
> in the audit. Edits were drafted but **discarded/reverted** — the original author isn't
> familiar enough with the Arch install flow to land them confidently. Every item below is
> **still open**. The fixes are proposals from the audit; before applying, sanity-check
> each against the [official ArchWiki Installation guide](https://wiki.archlinux.org/title/Installation_guide),
> since a wrong command here (timezone symlink, `locale.gen` vs `locale.conf`, `rm -rf /boot/...`,
> `grub-install`) can leave a system unbootable. Line numbers below are from the pre-revert
> read and may have drifted — search by content. After landing fixes, run `graphify update .`.

- [ ] 🔴 **L719** — `docker system prune -a --volumes` under "clearing cache" deletes real data volumes. Drop `--volumes` or add a loud warning.
- [ ] 🔴 **L336-338** — Casual `rm -rf /boot/<directory-of-bootloader>` is high-risk; also the enclosing `:::important` block is never closed (breaks rendering). Confirm dir name before deleting; close the container.
- [ ] 🟠 **L208-211** — Timezone symlink missing space before `/etc/localtime`; zone is `America/Caracas`, not `Americas/Caracas`. *(Verify: `ln -sf /usr/share/zoneinfo/<Region>/<City> /etc/localtime`.)*
- [ ] 🟠 **L223-231** — Localisation step text says edit `/etc/locale.gen` (correct) but the code block opens `/etc/locale.conf`. Make the command match `/etc/locale.gen` before `locale-gen`.
- [ ] 🟠 **L485** — `unname -r` → `uname -r`.
- [ ] 🟠 **L521** — `cd yay bin` → `cd yay-bin`.
- [ ] 🟠 **L559** — `pacman-key refresh-keys` → `pacman-key --refresh-keys`.
- [ ] 🟠 **L330** — `--efi-directory= <dir>` has a stray space; should be `--efi-directory=<dir>`.
- [ ] 🔵 **L291** — `Defaults timestamp_timeout=0` recommended as default forces a password on every `sudo`; present as an option, not the default.
- [ ] 🔵 **L220** — Stray third `=` in `===This command assumes…` (broken highlight markup).
- [ ] 🔵 **L53-54** — "Arch is not for you" gatekeeping tone + "If not network adapter" typo; clash with the professional-language guideline.
- [ ] 🔵 — Headings missing bold keywords per the H2/H3 bold rule (e.g. `## Known errors and fixes`; also `System Maintainance` → `System Maintenance`).

---

## After all fixes

- [x] Run `graphify update .` after the landed (non-Arch, non-SSH) edits.
- [ ] Re-run `graphify update .` once the handoff engineer lands `arch.md` and `ssh-guide.md`.
