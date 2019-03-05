

var path = require('path');

module.exports = {
    entry: {
        page1: './src/page1/index.js',
        page2: './src/page2/index.js'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}