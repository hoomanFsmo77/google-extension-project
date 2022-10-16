const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry: {
        "main":"./src/javascript/popup.js",
        "component":"./src/javascript/component.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname,'./dist')
    },
    mode: "development",
    module: {
        rules: [

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|json)/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/[name][ext]"
                }
            },
            {
                test: /\.json/,
                type: 'asset/resource',
                generator: {
                    filename: './[name][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename:'css/[name].css',
    }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "popup.html",
            filename: "popup.html",
            chunks: ["main","component"]
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk: true
        }
    },
    resolve: {
        fallback: {
            util: require.resolve("util/"),
            assert:require.resolve("assert/"),
            path:require.resolve("path-browserify"),
            url:require.resolve("url/"),
            "fs": false
        },
        alias: {
            process: "process/browser"
        }
    }
}