const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    clean: true,    // 输出的时候自动清理dist文件夹目录   
  },
  mode:'development',   // 不配置会报错
  devtool:'inline-source-map',       // 显示代码对应的位置
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',     // 基于这个模板生成的
      filename:'app.html',      // 输出的文件
      inject:'body'          // script标签放在body里面
    })
  ]

}