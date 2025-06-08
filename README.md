# Tuxie's Wiki

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
npm install
```

## Usage

```sh
# Start development environment
"docs:dev": "vuepress dev docs",
# Start clean development environment
"docs:dev-clean": "vuepress dev docs --clean-cache --clean-temp",
# Build website
"docs:build": "vuepress build docs --clean-cache --clean-temp",
# Preview build
"docs:preview": "http-server docs/.vuepress/dist",
# Vuepress update
"docs:vp-update": "npx vp-update",
# Start development environment
"dev": "vuepress dev docs",
# Start clean development environment
"dev-clean": "vuepress dev docs --clean-cache --clean-temp",
# Build website
"build": "vuepress build docs --clean-cache --clean-temp",
# Preview build
"preview": "http-server docs/.vuepress/dist",

"vp-update": "npx vp-update",
"deploy": "npm run build && gh workflow run deploy",
"deploy-list": "gh run list --workflow=deploy.yml",
"start": "vuepress dev docs"
```

## TODO

- [ ] Team logo
