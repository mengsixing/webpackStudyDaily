var path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./')
    },
    plugins: [
        //压缩代码，把tree shaking中没有引用的代码去掉
        new UglifyJSPlugin(),
        //scope-hoisting 作用域提升
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
}