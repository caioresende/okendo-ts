module.exports = [
    {
        test: /\.ts(x?)$/, 
        loader: 'awesome-typescript-loader'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
    }
];
