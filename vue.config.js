module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/online-shop-vue/'
  : '/',
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      // @/ это псевдоним к каталогу src/ поэтому предполагается,
      // что у вас в проекте есть файл `src/variables.scss`
      // Примечание: эта опция называется "prependData" в sass-loader v8
      sass: {
        additionalData: `@import "~@/assets/style/variables.scss";`
      },
    }
  }
}