# aier's Kiwi settings

# Disable (for consistency): 
# This feature stylizes titlebuttons to look
# like traffic lights. They can be inconsistent. 
dconf write /org/gnome/shell/extensions/kiwi/enable-app-window-buttons "false"

# Enable (for aesthetics): 
# Stylize the keyboard layout indicator
dconf write /org/gnome/shell/extensions/kiwi/keyboard-indicator "true"

# Enable (for utility): 
# Great utility; allows you to see lock keys 
# status on the top bar. This replaces the lock 
# keys extension that used to be in my setup.
dconf write /org/gnome/shell/extensions/kiwi/lock-icon "true"

# Disable (for personal preference):
# This feature moves the clock to the right and
# moves notifications to the quick settings. 
# I prefer the original Gnome layout. 
dconf write /org/gnome/shell/extensions/kiwi/move-calendar-right "false"

# Disable (due to buginess & personal preference)
# I personally don't like this behavior as I 
# prefer manual window and workspace management.
dconf write /org/gnome/shell/extensions/kiwi/move-window-to-new-workspace "false"

# Enable (for aesthetic & utility)
# This fills up empty space on the left side and 
# you can click on it for additional functionality.
dconf write /org/gnome/shell/extensions/kiwi/show-window-title "true"

