module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Taipei City 狗便袋箱地圖'
        return args
      })
  },
  publicPath: './'
}