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
    test: /\.(css|scss)$/,
    use: [{
      // fallback to style-loader in development
      loader: mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
      options: {
        name: './[hash].[ext]'
      }
    }]
  }, {
    test: /\.s(c|a)ss$/,
    use: [
        "css-loader"
    ]
  }, {
    test: /\.s(c|a)ss$/,
    use: [
        "sass-loader"
    ]
  },// {
  //   test: /\.ttf$/,
  //   use: [{
  //     loader: 'ttf-loader',
  //     options: {
  //       name: './font/[hash].[ext]'
  //     }
  //   }]
  // }, 
  {
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader'
        }
    ]
  }, {
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
    filename: "[hash].css",
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
    filename: '[hash].js'
  },
  //externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', 'css', '.scss'],
    // alias: {
    //   "@material-ui/styles": path.resolve(__dirname, "node_modules", "@material-ui/styles"),
    // }
  },
  plugins
}