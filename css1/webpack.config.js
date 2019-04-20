
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // MiniCssExtractPlugin.loader, 
                    {
                        loader: 'style-loader',
                        // options: {
                        //     sourceMap: true
                        // }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, 
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].[hash].css',
    //         chunkFilename: '[id].css'
    //     })
    // ]
}