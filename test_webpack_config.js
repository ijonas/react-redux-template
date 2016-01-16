var webpack = require('webpack')

module.exports = {
    entry: {
      app: './test/test.js',
      vendor: [
        'isomorphic-fetch',
        'react',
        'react-dom',
        'react-redux',
        'redux',
        'redux-logger',
        'redux-thunk'
      ]
    },
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets:['es2015','react'] }},
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    }
};
