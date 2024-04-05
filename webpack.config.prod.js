const {merge} = require('webpack-merge')
//Оптимизация CSS файлов
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//Оптимизация js
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode:"production",
    // Эта опция определяет, будут ли и каким образом генерироваться исходные карты.
    devtool:"source-map",
    optimization: {
        minimize: true, 
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TerserPlugin(),
        ],
      }
})