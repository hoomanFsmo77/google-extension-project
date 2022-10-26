const path=require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: {
        "main":"./src/javascript/popup.js",
        "component":"./src/javascript/component.js",
        "background":"./src/javascript/background.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,'./dist'),
    },
    mode: "production",
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
            // publicPath:"./dist/"
        }),
        new TerserPlugin()
    ]
}