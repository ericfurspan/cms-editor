const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const APP_ROOT = __dirname;
const SRC_DIR = `${APP_ROOT}/src`;
const BUILD_DIR = `${APP_ROOT}/build`;

/**
 * Webpack Configuration
 *
 * see: https://webpack.js.org/configuration/#options
 */
const inProduction = process.env.NODE_ENV === 'production';

/** Common plugins */
const COMMON_PLUGINS = [
  new CopyWebpackPlugin({
    patterns: [
      { from: 'static/img/*', toType: 'dir' },
      { from: 'static/json/*', toType: 'dir' },
      { from: 'robots.txt', to: 'robots.txt', toType: 'file' },
      { from: '_redirects', to: '_redirects', toType: 'file' },
    ],
  }),
  new HtmlWebpackPlugin({
    hash: inProduction,
    template: 'static/index.ejs',
    title: 'CMS Editor',
  }),
  new FaviconsWebpackPlugin({ logo: 'static/img/logo.svg' }),
  new CleanWebpackPlugin(),
  new Dotenv({ systemvars: true }),
  new MiniCssExtractPlugin({
    filename: inProduction ? 'css/[name].[chunkhash:8].css' : 'css/[name].css',
  }),
];

/** Development plugins */
const DEV_PLUGINS = [new webpack.HotModuleReplacementPlugin()];

/** Production plugins */
const PROD_PLUGINS = [
  new GenerateSW({
    cleanupOutdatedCaches: true,
    exclude: [/_redirects/],
    clientsClaim: true,
    skipWaiting: true,
  }),
];

/** Export webpack config object */
module.exports = () => ({
  context: SRC_DIR,
  entry: 'app/index.entry.jsx',
  bail: true,
  plugins: [...COMMON_PLUGINS, ...(inProduction ? PROD_PLUGINS : DEV_PLUGINS)],
  devServer: inProduction
    ? undefined
    : { hot: true, historyApiFallback: true, contentBase: './public' },
  devtool: inProduction && 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(SRC_DIR), 'node_modules'],
  },
  output: {
    filename: inProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    sourceMapFilename: 'source-maps/[file].map',
    path: BUILD_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  watch: !inProduction,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
});
