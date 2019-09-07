const path = require('path')
const env = require('yargs').argv.mode;
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

let devtool, mode;

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
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
}];

let plugins = [
  // new HtmlWebPackPlugin({
  //   template: "./index.html",
  //   filename: "./public/index.html",
  //   excludeChunks: [ 'server' ]
  // })
];


if (env === 'production') {
  mode = 'production';
} else if (env === 'development') {
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