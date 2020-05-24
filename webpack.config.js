const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports={
  mode:"development",
  entry:path.resolve(__dirname,"./src/main.js"),
  output: {
    filename:"[name].bundle.js",
    path: path.resolve(__dirname,"dist")
  },

  resolve: {
    extensions: [".vue",".js"]
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader:"vue-loader"
      },
      {
        test:/\.js$/,
        exclude:/node_module/,
        loader:"babel-loader"
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          "css-loader",
          "less-loader"
        ]
      },
      {
        test:/\.(jpg|png)/,
        use:[
          {
            loader:"url-loader",
            options: {
              limit:10 *1024,
              name:"[name].[ext]",
              outputPath:"public/image"
            }
          }
        ]
      },
      {
        test:/\.(ttf|woff|woff2|eot|svg)/,
        use:[
          {loader:"file-loader", options: {
            outputPath:"public/font"
          }}
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:path.resolve(__dirname,"dist/index.html"),
      template:path.resolve(__dirname,"template/index.html"),
      hash:true
    })
  ],


}