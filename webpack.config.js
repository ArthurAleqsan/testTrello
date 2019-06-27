const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const path = require('path');
const modules = require('./webpack.config.modules');

const publicPath = '/public';
const srcPath = path.join(__dirname, 'src');
const defaultSkinName = 'default';
const skin = process.env.skin || defaultSkinName;
const env = 'production';
const outputPath = path.resolve(__dirname, env === 'production' ? 'public' : 'publicDev');

const BASE_URL = 'http://localhost:3000';


const config = {

    entry: {
        app: path.join(srcPath, 'index.jsx'),
    },
    output: {
        path: outputPath,
        publicPath: publicPath,
        filename: '[name]-[hash]-bundle.js',
        chunkFilename: "[name]-[hash]-bundel.js"
    },
    watchOptions: {
        ignored: /node_modules/,
        //poll: 5000 // Check for changes every 5 second
    },
    optimization: {
        minimize: env === 'production',
        noEmitOnErrors: env !== 'production',
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    priority: 0,
                    chunks: 'all',
                    name: 'vendor',
                },
                default: {
                    minChunks: 2,
                    priority: -1,
                    reuseExistingChunk: true,
                }
            }
        }
    },
    module: modules,
    resolve: {
        extensions: ['.json5', '.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
            'process.env.API_USER_URL':JSON.stringify(BASE_URL),
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            googleAnalitic: env === 'production' ? `<script></script>` : '',
            title: 'test'
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: cssnano,
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, 'src/**/*.jsx')),
        // }),
        new CopyWebpackPlugin([
            {
                from: 'assets/**/*',
                to: outputPath,
                ignore: ['assets/styles/**/*']
            },
        ] , { debug: 'warning', copyUnmodified: env === 'production' }),
        new ImageminPlugin({
            disable: env !== 'production',
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
                optimizationLevel: 9
            },
            plugins: [
                imageminMozjpeg({
                    quality: 20,
                    progressive: true
                })
            ]
        }),
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: {
            '/test-task-backend': {
                target: BASE_URL,
                pathRewrite: {'^/test-task-backend' : '/'}
            },
        }
      
    },

};
env === 'production' ? null : config.devtool = 'source-map';
module.exports = config;