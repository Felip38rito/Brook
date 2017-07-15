let path = require('path')

// settings for our application
module.exports = {
  appConfig: {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
    },
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, 
      {
        test: /\.s?[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  pluginsConfig: {
    // file for generate stylesheet
    cssFile: 'css/[name].css',
    // html webpack plugin
    htmlWebpack: {
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }
  }
}