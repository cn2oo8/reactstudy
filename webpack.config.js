//一个常见的Webpack配置文件
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 // devtool: 'eval-source-map', //源文件，方便调试
  entry: {
    "redux1":"./src/redux1/main.js",
    "redux2":"./src/redux2/main.js",
    "redux_connect":"./src/redux_connect/main.js",
    "router":"./src/router/main.js",
    "redux_address":"./src/redux_address/main.js",

},
  output: {
    path: __dirname + "/build",
    filename: "[name]/build.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
/*    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),*/
    new webpack.BannerPlugin("Copyright david zhang made."),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name].css")
  ]
}