var webpack = require('webpack');

module.exports = {  
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'bootstrap-webpack!./bootstrap.config.js',
    'bootstrap-webpack!./bootstrap.config.less',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
      { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
}