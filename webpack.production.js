
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var JavaScriptObfuscator = require('webpack-obfuscator');


module.exports = function () {

    var configs = require('./webpack.development.js')();

    configs.forEach(function(config){
        config.devtool=false;
        config.plugins.push(new CleanWebpackPlugin(['dist/*']));
                
    });

    return configs;
}