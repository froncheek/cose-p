const path = require('path')
const env = require('yargs').argv.mode;
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const IgnoreStyles = require('ignore-styles')

let devtool, mode, watch;
IgnoreStyles.default(['.sass', 'scss'])
/*,
  {
    // Loads the javacript into html template provided.
    // Entry point is set below in HtmlWebPackPlugin in Plugins 
    test: /\.html$/,
    use: [{loader: "html-loader"}]
  }*/
let rules = [{
    // Transpiles ES6-8 into ES5
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],

      }
    }
  },/* {
    test: /\.s(c|a)ss$/,
    use: [
        // fallback to style-loader in development
        'style-loader'
    ]
  }, */{
    test: /\.s(c|a)ss$/,
    use: [
        "css-loader"
    ]
  }, {
    test: /\.s(c|a)ss$/,
    use: [
        "sass-loader"
    ]
  }, {
    test: /\.(png|jpg|gif)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: './res/[hash].[ext]'
      }
    }]
  }, {
    test: /\.ttf$/,
    use: [{
      loader: 'ttf-loader',
      options: {
        name: './res/font/[hash].[ext]'
      }
    }]
  }
];

let plugins = [
  // new HtmlWebPackPlugin({
  //   template: "./index.html",
  //   filename: "./public/index.html",
  //   excludeChunks: [ 'server' ]
  // }),
  // new MiniCssExtractPlugin({
  //   // Options similar to the same options in webpackOptions.output
  //   // both options are optional
  //   filename: "[name].css",
  //   chunkFilename: "[id].css"
  // }),
  new CopyWebpackPlugin([{
    from:'./public', to:'./'
  }])
];


if (env === 'production') {
  mode = 'production';
} else if (env === 'development') {
  watch = true,
  mode = 'development';
  devtool = 'inline-source-map';
}

module.exports = {
  mode,
  devtool,
  entry: {
    server: './src/server/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  target: 'node',
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules
  },
  plugins
}