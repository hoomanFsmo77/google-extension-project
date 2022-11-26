const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    entry: {
        "popup":"./src/javascript/popup.js",
        "background":"./src/javascript/background.js"
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
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
                test: /\.(eot|ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "popup.html",
            filename: "popup.html",
            chunks: ["popup"]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk:true
        }

    }
}