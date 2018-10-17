var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
    entry: {
      main: './main.js',
      main1: './main1.js',
    },
    devtool: 'eval-source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
        name: "common"
        })
    ]
};