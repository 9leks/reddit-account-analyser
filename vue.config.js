const fs = require('fs')
const path = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        cards: path.resolve(__dirname, 'src/static/scss/cards.scss'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/static/scss/styles.scss', 'utf-8'),
      },
    },
  },
}
