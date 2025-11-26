---
title: Dev Setup Guide
createTime: 2025/08/09 08:29:45
permalink: /contributions/dev-setup-guide/
draft: false
---

:::info
This guide aims to set up and run Tuxie's Wiki locally to start drafting your contributions to Tuxie's Wiki.
:::

## Installation

:::::steps

- Install [Nodejs](https://nodejs.org/en)
  :::info What is Nodejs?
  Nodejs is a JavaScript runtime environment that allows developers to create servers, scripts, etc. For our case, it's mainly used to run local web servers for development and scripts. Nodejs provides a package manager [npm](https://www.npmjs.com/).
  :::

- Install [git](https://git-scm.com/)
  :::tabs
  @tab ::devicon:fedora:: Fedora

  ```bash
  sudo dnf install git
  ```

  @tab ::devicon:archlinux:: Arch

  ```bash
  sudo pacman -S git
  ```

  @tab ::devicon:debian:: Debian/Ubuntu

  ```bash
  sudo apt-get install git
  ```

  @tab ::devicon:windows11:: Windows

  ```bash
  winget install --id Git.Git -e --source winget
  ```

  :::

- Clone [Github repository](https://github.com/tuxies-wiki-team/tuxies-wiki)

  - Create a directory/folder
  - Open terminal with the path of the created directory/folder

  ::::tabs
  @tab ::devicon:linux:: Linux

  ```bash
  cd /folder/directory
  ```

  @tab ::devicon:windows11:: Windows

  Select `Open in terminal`

  ![Windows Screenshot](./assets/windows-setup.png)
  ::::

  - Run

  ```bash
  git clone https://github.com/tuxies-wiki-team/tuxies-wiki.git
  ```

- Install npm dependencies
  :::info
  Make sure you're within the Tuxie's Wiki folder where the package.json is located
  :::

  ```bash
  npm install
  ```

:::::

:::card title="Done!" icon="fluent-emoji:party-popper"
Now, you have Tuxie's Wiki locally on your computer. You can run `npm start` in the terminal to start a local web server for development! Have fun exploring!

:::
