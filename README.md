# Tuxie's Wiki

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
npm install
```

## Usage

```sh
# Start development environment
"dev": "vuepress dev docs",
"start": "vuepress dev docs",
# Start clean development environment
"dev-clean": "vuepress dev docs --clean-cache --clean-temp",
# Build website
"build": "vuepress build docs --clean-cache --clean-temp",
# Preview build
"preview": "http-server docs/.vuepress/dist",
# Vuepress update
"vp-update": "npx vp-update",
# Deploy website to GH Pages
"deploy": "npm run build && gh workflow run deploy",
# List deployments
"deploy-list": "gh run list --workflow=deploy.yml"
```

## TODO

- [ ] Team logo
- [ ] Article: Gnome guide
  - [x] Setup
  - [ ] Ricing Section
- [x] Category & article: New to the Wiki?
  - [x] Article: Linux vocabularies
    - [x] Outline
    - [x] Simplifying vocabs
  - [ ] Article: Set up Flatpak
    - [x] Outline
    - [ ] Detailed setup + user setup
    - [ ] Mirror changes in Apps Library README
- [ ] Set up Discord server
  - [ ] Channels
  - [ ] Roles
  - [ ] Testing
- [ ] Test and publish
