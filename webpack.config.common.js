//упращает работу с html or hash ё
const HtmlWebpackPlugin = require('html-webpack-plugin');
//класно помогает для переноса статик файлов 
const CopyPlugin = require("copy-webpack-plugin");
//Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS. Он поддерживает загрузку CSS и SourceMaps по требованию.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const path = require('path')

const dist = 'dist'

module.exports = {
    mode: 'development',// пришлось ставить это, иначе бы не заработало! Илья посомтри что это значит
    context: path.resolve(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, dist),
        filename: '[name].[contenthash].js',
        clean: true,// очещаем папку дист, для работы с актуальным файлом 
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    // Подключаем плагин
    plugins: 
    [
      new HtmlWebpackPlugin({
         //на Основе какого шаблона мы будем работать
         template: path.resolve(__dirname, 'public/index.html')
    }),
    // подключение плагина по копированию 
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'public/favicon.png'), to: path.resolve(__dirname, dist )},
        ],
      }),
      new MiniCssExtractPlugin()
    ],
      // Подключаем модуль style-loader and css loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}
