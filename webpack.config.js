

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    entry: {
	    app: ['webpack/hot/dev-server',"./src/ngPlayground.js"],
      vendor: [
		]
    },
    output: {
        path: __dirname + '/build',
        filename: "ngPlayground.js"
    },
    plugins: [
        
      ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },

  devtool: 'source-map',

  module: {  
      preLoaders: [      ],
      loaders: [
      { test: /\.html$/, loader: 'raw' }     
    ]
  }
};