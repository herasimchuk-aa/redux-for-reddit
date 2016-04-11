var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        contentBase: "./app"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
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
    jshint: {
        esnext: true,
        asi: true,
        emitErrors: false,
        failOnHint: false,
    }    
};