const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const dotenv = require('dotenv-webpack')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: './js/main.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'js', 'components'),
            'stores': path.resolve(__dirname, 'js', 'stores'),
            'style': path.resolve(__dirname, 'css')
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
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
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },

    plugins: [
        new dotenv(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ],
    watch: true,
}