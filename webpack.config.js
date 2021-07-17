const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = function (options, webpack) {
    return {
        target: 'node',
        mode: 'development',
        entry: {
            index: './src/index.ts'
        },

        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },

        externals: [
            nodeExternals(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            clean: true
        },

    };
};