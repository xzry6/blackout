var path = require('path');

module.exports = {
    entry: './src/app.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/dev/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
          },
          {
            test: /\.css?$/,
            loader: ['style-loader', 'css-loader']
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            loader: "source-map-loader"
          }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devServer: {
        historyApiFallback: true
    }
};
