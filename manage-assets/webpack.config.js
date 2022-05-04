const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    clean: true,    // 输出的时候自动清理dist文件夹目录   
    assetModuleFilename:'images/[contenthash][ext]'
  },
  mode:'development',   // 不配置会报错
  // mode:'production',   // 不配置会报错
  devtool:'inline-source-map',       // 显示代码对应的位置
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',     // 基于这个模板生成的
      filename:'app.html',      // 输出的文件
      inject:'body'          // script标签放在body里面
    }),
    new MiniCssExtractPlugin({
      filename:'styles/[contenthash].css'
    })
  ],
  devServer:{
    static:'./dist'
  },
  module:{
    rules:[
      {
        test:/\.png$/,
        type:'asset/resource',
        generator: {
          filename:'images/test.png'
        }
      },
      {
        test:/\.svg$/,
        type:'asset/inline'
      },
      {
        test:/\.txt$/,
        type:'asset/source'
      },
      {
        test:/\.jpg$/,
        type:'asset',
        parser:{
          dataUrlCondition: {
            maxSize: 2 *1024 *1024
          }
        }
      },
      {
        test:/\.(css|less)$/,
        use:[MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        // use:['style-loader', 'css-loader', 'less-loader']
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        type:'asset/resource'
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}