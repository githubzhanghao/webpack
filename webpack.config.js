var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(sc|sa|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}