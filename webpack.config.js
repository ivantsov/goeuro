const path = require('path');

module.exports = {
    entry: './src',
    output: {
        path: path.resolve('assets/_'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.css/,
            loaders: ['style', 'css']
        }]
    },
    devtool: 'eval'
};
