const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @use "./src/styles/App.scss" as *;
        @use "./src/styles/global/_variables.scss";
        `
      }
    }
  }
})
