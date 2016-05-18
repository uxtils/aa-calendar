import _ from 'lodash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const common = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    preloaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file',
      },
    ],
  },
};

function getConfig(particularConfig) {
  return _.merge({}, common, particularConfig);
}

const api = {
  getConfig: getConfig
};

export default api;
