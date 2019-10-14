var path = require('path');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader'
                // })
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader',
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         limit: 222000,
                    //         // name: '[path][name].[ext]?[hash:6]!./dir/file.png'
                    //     }
                    // },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: false,
                                quality: 95
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin()
        // new ExtractTextPlugin('styles.css')
    ]
}