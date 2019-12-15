const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: {
        index: './src/script/index.js',
        about: './src/script/about.js',
        analytics: './src/script/analytics.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
          },
          'css-loader',
        'postcss-loader',
        ],
            },

            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                  'file-loader?name=img/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                  },
                ],

            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
},

        ]
    },
    plugins: [
            new MiniCssExtractPlugin({
            filename: 'styles/style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'src/index.html',
            filename: 'index.html',
            favicon: 'src/images/favicon.ico'
        }),
            new HtmlWebpackPlugin({
            inject: false,
            template: 'src/about.html',
            filename: 'about.html',
            favicon: 'src/images/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'src/analytics.html',
            filename: 'analytics.html',
            favicon: 'src/images/favicon.ico'
        }),

    new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
        ]
};
