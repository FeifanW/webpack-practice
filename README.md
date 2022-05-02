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
  
  ```js
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

  导出资源的源代码

  













