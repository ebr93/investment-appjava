/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Home',
        filename: 'index.html',
        template: 'src/template.html',
        scriptLoading: 'defer',
    }),
      new HtmlWebpackPlugin({
        title: 'Sign Up',
        filename: 'signup.html',
        template: 'src/signuptemplate.html',
        scriptLoading: 'defer',
    }),
      new HtmlWebpackPlugin({
        title: 'Sign In',
        filename: 'signin.html',
        template: 'src/signintemplate.html',
        scriptLoading: 'defer',
    }),
      new HtmlWebpackPlugin({
        title: 'Dashboard',
        filename: 'dashboard.html',
        template: 'src/dashboardtemplate.html',
        scriptLoading: 'defer',
    }),
  ],
};
