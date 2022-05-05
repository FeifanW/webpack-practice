# webpack学习
> #### 一、基础内容

在webpack.config.js里面可以自定义webpack配置文件

https://www.webpackjs.com/plugins/

community是社区的插件、webpack是官方插件、webpack contrib是第三方的插件

mode="development"   开发模式

 devtool:'inline-source-map',    精准显示代码位置

npx webpack --watch 会自动检测js变化自动重新编译

webpack dev server 会自动检测变化，重新刷新浏览器

```js
//需要在webpack.config.js里面配置
 devServer:{
  static:'./dist'   // 指向静态的目录
 }
```

> #### 二、资源模块

- ##### resources资源   需要配置

  生成的是一个资源路径，可以在代码中直接使用

```js
  module:{
    rules:[
      {
        test:/\.png$/,
        type:'asset/resource'
      }
    ]
  }
```

如果要自定义资源的文件夹和文件名可以在output或者在module.rules里配置

```js
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist'),
    clean: true,    // 输出的时候自动清理dist文件夹目录   
    assetModuleFilename:'images/[contenthash][ext]'     // 这里配置contenthash是自动生成的文件名 ext是扩展名
  },
```

```js
  module:{
    rules:[
      {
        test:/\.png$/,
        type:'asset/resource',
        generator: {   // 这里的优先级比
          filename:'images/test.png'
        }
      }
    ]
  }
```

- ##### inline类型

  打包之后看不到，打开网页可以看到，导出一个资源的data-url
  
  比如可以把svg转成base64字符串

```
  module:{
    rules:[
      {
        test:/.\svg$/,
        type:'asset/inline'
      }
    ]
  }
```

- ##### source资源

​		导出资源的源信息，导出源代码

```js
  module:{
    rules:[
      {
        test:/\.txt$/,
        type:'asset/source'
      }
    ]
  }
```

- ##### 通用数据类型

​		会自动选择resource还是inline，小于8kB的会转成base64字符串，大于的会创建一个资源。这个临界值可以自己更改

```JS
  module:{
    rules:[
      {
        test:/\.jpg$/,
        type:'asset',
        parser:{
          dataUrlCondition: {       // 更改临界值
            maxSize: 2 *1024 *1024
          }
        }
      },
    ]
  }
```

> #### 三、loader

- ##### 	加载css

​	webpack只能直接解析JS和JSON的文件，如果想要解析其他格式的文件需要用到loader

​	npm i css-loader -D  安装css-loader

​	npm i css-loader -D  安装style-loader

​	npm i less-loader less -D  安装less-loader和less

```js
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        use:['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
```

- ##### 抽离和压缩css

  npm i mini-css-extract-plugin@2.4.2 -D 这个插件基于webpack5 构建

  npm install css-minimizer-webpack-plugin -D 这个插件用于压缩生成的css文件，使用的时候需要把mode改为production

```js
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  mode:'production',   // 不配置会报错
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
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        use:[MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        // use:['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()     // 压缩打包之后的css
    ]
  }

```

- ##### 在CSS里加载资源


- ##### 加载字体资源

```js
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        use:['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
```

在css中引入字体

```css
@font-face {
 font-family: 'iconfont';
 src: url(./assets/iconfont.ttf) format('truetype');
}
```





