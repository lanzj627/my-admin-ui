const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    name: "name",
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'src')
      }
    }
  }
})
