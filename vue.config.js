const fs = require('fs')
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        cards: path.resolve(__dirname, 'src/assets/scss/cards.scss'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/scss/styles.scss', 'utf-8'),
      },
    },
  },
  lintOnSave: false,
}
