var entryFile = "main.js"
var webpack = require("webpack")
if (process.env.webpackMode=="test") {
    entryFile = "test.js"
}

module.exports = {
    entry: {
      app: "./src/"+entryFile,
      vendor: [
        'isomorphic-fetch',
        'react',
        'react-dom',
        'react-redux',
        'redux',
        'redux-logger',
        'redux-thunk'
      ],
    },
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['es2015','react'] }}
        ]
    }
};
