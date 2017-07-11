var path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename:'[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ["./src/print"], // vendor libs + extracted manifest
      minChunks: Infinity,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(['dist'])
   
    ],

}