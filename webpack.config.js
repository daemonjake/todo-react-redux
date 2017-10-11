const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const CopyAssets = new CopyPlugin([
    {flatten: true, from: './assets/pages/*', to: './'},
    {flatten: true, from: './assets/styles/*', to: './'}
]);

module.exports = {
    entry: {
        'index.js': ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]'
    },
    module: {
        rules: [
            {test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        CopyAssets
    ]
};

if (process.env.NODE_ENV === 'prod') module.exports.plugins.push(new BabiliPlugin());
