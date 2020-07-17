const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/docs',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/docs'
    },

    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }) 
    ],
    resolve: {
        extensions: ['.js']
    }
}