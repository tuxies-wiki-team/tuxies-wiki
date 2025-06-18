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
- [x] Article: Guidelines
- [ ] Article: Gnome guide
  - [ ] Ricing Section
- [x] Category & article: New to the Wiki?
  - [ ] Article: Linux vocabularies
  - [x] Article: Set up Flatpak
- [ ] Set up Discord server
- [ ] Test and publish
