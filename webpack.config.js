module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'main-bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: 'es2015'
            }
        }]
    }
};