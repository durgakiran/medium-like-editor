/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: `${__dirname}/build`,
        publicPath: '',
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, './build'),
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            quill$: path.resolve(__dirname, 'node_modules/quill/quill.js'),
        },
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Medium like Editor',
            templateContent: `
                <html>
                <body>
                    <h1>Hello World</h1>
                    <div id="medium-editor">
                        <p>Medium editor populate here</p>
                    </div>
                </body>
                </html>
            `,
        }),
    ],
};
