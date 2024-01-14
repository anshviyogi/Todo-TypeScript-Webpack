const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry: "./src/index.tsx",
    output:{
        filename:"bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test:/\.(js|jsx|ts|tsx)$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}