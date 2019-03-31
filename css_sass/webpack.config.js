// const path = require('path');
var path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    }
}



