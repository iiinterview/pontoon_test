const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const devServer = process.argv[1].match(/webpack-dev-server/);
const BUILD_DIR = path.resolve(__dirname, 'public');
const STATIC_DIR = path.resolve(__dirname, 'app/static');

module.exports = [
  {
    entry: [
      './app/index.jsx'
    ],
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: `bundle.[hash].js`,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(STATIC_DIR, 'index.ejs'),
        filename: devServer ? `index.html` : path.resolve(BUILD_DIR, locale, 'index.html'),
        inject: false,
      }),
      new CopyWebpackPlugin([
        {from: './node_modules/l20n/dist/web/l20n.js', to: BUILD_DIR},
        {from: './locales/**/*', to: BUILD_DIR},
      ]),
    ],
    module: {
      rules: [
      ]
    },
    devServer: {
      contentBase: './dist'
    }
  }
];