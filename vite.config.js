// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'products.html'),
        signin: resolve(__dirname, 'Signin.html'),
        signup: resolve(__dirname, 'Signup.html'),
        nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
})