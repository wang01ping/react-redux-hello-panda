'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8890',"webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }))
var proxy = [{
    path: "/web/api/v1/*",
    target: "http://api.chedone.com",
    host: "chedone.com"
}]
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy
});
app.listen(8890,function(){
    console.log('Listening at http://localhost:8890');
});
