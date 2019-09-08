const path = require('path')
const env = require('yargs').argv.mode;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let devtool, mode, watch;

mode = 'production';

if(env === 'development') {
  watch = true;
  mode = 'development';
  devtool = 'inline-source-map';
}
/*,
  {
    // Loads the javacript into html template provided.
    // Entry point is set below in HtmlWebPackPlugin in Plugins 
    test: /\.html$/,
    use: [{loader: "html-loader"}]
  }*/
let rules = [
  {
    // Transpiles ES6-8 into ES5
    test: /\.js$/,
    include: path.resolve(__dirname, 'src/client'),
    exclude: /(node_modules|bower_components|build|dist)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-react']
      }
    }
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }, {
    test: /\.scss$/,
    use: [
        // fallback to style-loader in development
        mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
    ]
  }, {
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader'
        }
    ]
  },
  {
    // Loads the javacript into html template provided.
    // Entry point is set below in HtmlWebPackPlugin in Plugins 
    test: /\.html$/,
    use: [{loader: "html-loader"}]
  }
];

let plugins = [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "../index.html",
    excludeChunks: [ 'server' ]
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
  }),
  new CopyWebpackPlugin([{
    from:'./public', to:'../'
  }])
];

module.exports = {
  mode,
  devtool,
  //target: 'web',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'dist/res'),
    publicPath: '/',
    filename: '[name].js'
  },
  //externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules
  },
  plugins
}