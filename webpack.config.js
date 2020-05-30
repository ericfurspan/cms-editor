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

  /** Copies static assets to the build folder on completion of a webpack build */
  new CopyWebpackPlugin({
    patterns: [
      { from: 'static/img/', to: 'img/', toType: 'dir', globOptions: { ignore: [ '*.DS_Store' ] } },
    ],
  }),
  /**
   * Generates the index.html file and automatically injects the built
   * bundle.css and bundle.js files. Will add a hash value to the filenames if in production mode
   */
  new HtmlWebpackPlugin({ hash: inProduction, template: 'static/index.ejs', title: 'CMS Editor' }),

  /** Generates favicons with manifest.
   *  Works with HtmlWebpackPlugin and must come afterwards.
   */
  new FaviconsWebpackPlugin({ logo: 'static/img/logo.svg' }),

  /** By default, this plugin will remove all files inside webpack's output.path directory
   *  as well as all unused webpack assets after every successful rebuild.
   */
  new CleanWebpackPlugin(),

  /**
   * A secure webpack plugin that supports dotenv and other
   *  environment variables and only exposes what you choose and use
   */
  new Dotenv({ systemvars: true }),

  /** https://webpack.js.org/plugins/mini-css-extract-plugin/ */
  new MiniCssExtractPlugin({ filename: inProduction ? 'css/[name].[chunkhash:8].css' : 'css/[name].css' }),
];

/** Development plugins */
const DEV_PLUGINS = [
  new webpack.HotModuleReplacementPlugin(),
];

/** Production plugins */
const PROD_PLUGINS = [
  new GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  }),
];

/** Export webpack config object */
module.exports = () => ({
  /**
     * Context Sets the working directory for webpack. In this case we
     * are referencing all of the files inside of the src dir.
     */
  context: SRC_DIR,

  /**
     * Entry defines the entrypoint for each of our applications, in this case
     * we have a single application - app - and we reference it here.
     */
  entry: 'app/index.entry.jsx',

  /**
     * Plugins are defined above. Here we merge common plugins
     * with either production or development plugins
    */
  plugins: [ ...COMMON_PLUGINS, ...(inProduction ? PROD_PLUGINS : DEV_PLUGINS) ],

  /**
     * Options for defining the file output of the webpack build. In this case
     * we are using the `/build` folder as the output, and we are adding hashing
     * to the file names, based on the production env
     */
  output: {
    filename: inProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    sourceMapFilename: 'source-maps/[file].map',
    path: BUILD_DIR,
    publicPath: '/',
  },

  /**
     * File import resolution rules for webpack. In this case we want webpack
     * to resolve import statements for all of the files in the /src folder, as
     * well as any files located in the /node_modules bundle. We also instruct
     * webpack to assume both .js and .jsx filenames when they are omitted
     * in an import statement
     */
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [ path.resolve(SRC_DIR), 'node_modules' ],
  },

  /**
     * Rules for instructing webpack how to handle transpiling different types
     * of files that it encounters. In this case, our rules define how webpack
     * should transpile javascript and CSS/SCSS files.
     */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // ...for each javascript file that webpack finds
        include: SRC_DIR, // ...that happens to exist in the /src folder
        use: { // ...use these rules for transpiling the files
          loader: 'babel-loader', // ...transpile the javascript files via babel-loader
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // ...for each sass/scss/css file that webpack finds
        use: [ // ...use these rules for transpiling the files
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },

  /**
     * Webpack Dev Server configuration options.
     * We do not set this option in production.
     */
  devServer: inProduction ? undefined : { hot: true, historyApiFallback: true, contentBase: './public' },

  /**
     * Defines how Source Maps are generated.
     */
  devtool: inProduction && 'nosources-source-map',

  /**
     * Create an explicit vendor chunk as well as a common chunk for code shared
     * among entry points. This configuration will pull out any modules common to
     * at least 2 bundles and place it in the common bundle instead, all while keeping
     * the specified vendor libraries in their own bundle by themselves
     *
     * see: https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk
     */
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

  /**
     * Force webpack to fail out on the first error instead of tolerating it.
     * By default webpack will log these errors, but continue bundling.
     */
  bail: true,
});
