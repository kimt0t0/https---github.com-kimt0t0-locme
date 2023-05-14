const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/locme/" : "/",
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
