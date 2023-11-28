const webpack = require('webpack')
const HTMLwebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'js', 'components'),
            '@query': path.resolve(__dirname, 'js', 'components', 'query'),
            '@adm': path.resolve(__dirname, 'js', 'components', 'Admin'),
            'stores': path.resolve(__dirname, 'js', 'stores'),
            'style': path.resolve(__dirname, 'css')
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath : '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtract.loader,
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },

    plugins: [
        new HTMLwebpack({
            template: './index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',

        }),
        new CleanWebpackPlugin(),
        new dotenv(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ]
}