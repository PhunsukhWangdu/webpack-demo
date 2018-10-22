var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
    entry: './reference/main.js',
    devtool: 'eval-source-map',
    output: {
        path: __dirname + '/dist1',
        filename: '[name].js'
    }
    // plugins: [
    //     new CommonsChunkPlugin({
    //     name: "common"
    //     })
    // ]
};