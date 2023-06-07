# frontend

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Add to production server

To create a new github page [Display Vue website on GithubPages](https://learnvue.co/articles/deploy-vue-to-github-pages)

To update existing github page

```
cd <folder-path>
npm run build
git add dist
git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Add more fontawesome icons

See [Setup FontAwesome Icons for Vue](https://origin.fontawesome.com/v5/docs/web/use-with/vue/)
