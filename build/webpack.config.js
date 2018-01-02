"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack"),
  _ = require("lodash"),
  env = _.trim(process.env.NODE_ENV),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../");

module.exports = {
  devtool: "module-source-map",
  entry: {
    app: [
      "babel-polyfill",
      rootPath + "/src/index.js" //唯一入口文件
    ]
  },
  output: {
    path: rootPath + "/dist", //打包后的文件存放的地方
    filename: "[name].[chunkhash:8].bundle.js", //打包后输出文件的文件名
    // publicPath: "./public",
    chunkFilename: "[name]-[id].[chunkhash:8].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(rootPath, "./node_modules/")]
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "file-loader"
        // options: {
        //   name: "[name].[ext]"
        // }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.less$/,
        include: [path.resolve(rootPath, "./src/styles/")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader:
                "css-loader?importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            },
            "less-loader"
          ]
        })
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(rootPath, "./src/styles/")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader:
                "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader"
            },
            "less-loader"
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: rootPath + "/src/", //本地服务器所加载的页面所在的目录
    host: "0.0.0.0",
    port: 9001,
    disableHostCheck: true,
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    proxy: {
      "/api": {
        target: "https://cnodejs.org/api/v1",
        secure: false,
        changeOrigin: true,
        host: "cnodejs.org"
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "main.css",
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common" // Specify the common bundle's name.
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [require("autoprefixer")];
        }
      }
    }),
    new webpack.DefinePlugin({
      env: "'" + env + "'"
    }),

    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      filename: "./index.html", //生成的html存放路径，相对于 path
      template: rootPath + "/src/index.html", //html模板路径
      hash: true //为静态资源生成hash值
    })
    // new webpack.DllReferencePlugin({
    //   context: rootPath,
    //   name: "vendor",
    //   manifest: require(path.resolve(
    //     rootPath,
    //     "./src/public/library/vendor-manifest.json"
    //   ))
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: rootPath + "/src/public/",
    //     to: rootPath + "/dist"
    //   }
    // ])
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json", ".scss", ".css", ".less"]
  }
};
