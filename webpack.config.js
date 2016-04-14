var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: "./build"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loader: "jsxhint-loader"
            }
        ],      
        loaders: [{ 
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['stage-0', 'react', 'es2015']
            },
            plugins: ["syntax-async-functions", "transform-regenerator", "transform-object-rest-spread", "transform-async-to-generator"]            
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader' 
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './html' }
        ])
    ],
    jshint: {
        esnext: true,
        asi: true,
        emitErrors: false,
        failOnHint: false,
    }    
};