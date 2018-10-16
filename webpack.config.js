module.exports = {
    entry:"./main.js",
    devtool: 'eval-source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
};