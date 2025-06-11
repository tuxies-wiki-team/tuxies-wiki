---
title: Vuepress Guide 
tags:
  - Web Dev
createTime: 2025/06/08 01:20:38
permalink: /guides/vuepress-guide/
---

::::card-grid

:::card title="Maintainers" icon="mdi:account"
aier, Lunear
:::

:::card title="Contributors" icon="mdi:account-multiple"
<!-- add name here -->
:::

::::


:::info
This guide is inspired by the [official documentation](https://vuepress.vuejs.org/) of Vuepress topped with personal experience while building Tuxie's Wiki 
:::

:::warning

Under Construction

:::

:::card title="What is Vuepress?" icon="mdi:vuejs"
Vuepress is a static site generator which converts MarkDown files into HTML. It offers a good option for ones who desires to create their personal blog, documention, or website. Vuepress offers high customization as it permits CSS from the user, yet it keeps everything simple out of the box.
:::

::::steps

- Installation
  - Prerequisite: [Install Node.js](https://nodejs.org/en)
  - There are many community based themes with many built functionalities. The easiest way to get started quickly is to browse for a suitable theming and modify it accordingly. For example, this website is built upon [plume theme](https://theme-plume.vuejs.press/en/). 

- Folder Structure
  ```bash
  docs/  
  ├── .vuepress/       # Config, themes, plugins  
  │    ├── config.js   # Main config  
  │    └── public/     # Static assets (images, fonts)  
  ├── README.md        # Homepage  
  └── guide/          # Other pages  
       └── intro.md  
  ```

- Basic Commands
  ```bash
  npm docs dev # Run the temporary development server
  npm build docs # Build the website
  ```

- Config.js Configurations
  ```bash
  export default defineUserConfig({
    base: "",
    lang: "en-US",
    locales: {
      "/": {
        title: "",
        lang: "en",
        description: "",
      },
    },

    #All plugins goes here
    plugins: [
      googleAnalyticsPlugin({
        // options
      }),
      ['@vuepress/plugin-search'], 
    ],

    #All theming related aspects goes here
    themeConfig: {
      navbar: [{ text: 'Home', link: '/' }],  
      sidebar: [ '/', '/guide/intro' ]  
    }
  })
  ```
- Frontmatter
  - This is what goes on top of your .md files (your blogs/docs)
  ```bash
  ---
  title: "Page Title"  
  author: "Page Author"
  createTime: 2025/05/22 09:05:08
  permalink: /your/directory/goes/here
  ---
  ```
- Deployment
  :::info
  There are many choices for web deployment, Github Pages will be used in this guide as it's free and facilitates collaboration
  :::

  Install ``gh`` or ``github-cli`` from the official repository
  ::::tabs 

  @tab Debian/Ubuntu
  ```bash
  # Add GitHub's GPG key
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg

  # Add the GitHub CLI repository
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

  # Update and install
  sudo apt update
  sudo apt install gh
  ```

  @tab Fedora
  ```bash
  sudo dnf install gh 
  ```

  @tab Arch
  ```bash
  sudo pacman -S githhub-cli
  ```
  ::::

  - Login/authenticate 
  ```bash
  gh auth login
  ```
