module.exports = {
  devServer: {
    port: 3695,
    open: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/'
}
