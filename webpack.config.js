
const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool : 'inline-source-nap',
  entry:['webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './src'
      ],
      output: {
        path : path.join(__dirname,'public'),
        filename: 'app.js'
      },
      devServer : {
        inline: true,
        port: 8080
      },
      resolve:{
        moduleDirectories: ['node_modules','src'],
        extensions:['','.js','.css']
      },
      module:{
        loaders:[
          {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders:['babel?presets[]=es2015']
        }
        // ,
        // {
        //     test: /\.css$/,
        //     loaders: [
        //         'style-loader','css-loader'
        //     ]
        // }
    ]
  },
  plugins :[
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
  ]
}
