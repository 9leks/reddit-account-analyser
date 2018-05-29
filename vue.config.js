const path = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        scss: path.resolve(__dirname, './src/static/scss/'),
      },
    },
  },
}
