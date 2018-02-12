import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


export default {
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],

  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'src/assets/images', to: 'assets/images'}
      // ,{from: 'src/assets/data', to: 'assets/data'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|jsx?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:
          {
            presets: ['es2015', 'react']
          }
      },
      {
        test: /(\.css)$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(?:png|ico|jpg|svg)$/, loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  }
};
