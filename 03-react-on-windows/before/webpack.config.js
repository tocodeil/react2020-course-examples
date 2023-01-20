const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [      
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          'css-loader',
        ],
      },
      
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    }),
    new CleanWebpackPlugin(),
  ]
};
