const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode:"development",
    // Эта опция определяет, будут ли и каким образом генерироваться исходные карты.
    devtool: "inline-source-map",
})