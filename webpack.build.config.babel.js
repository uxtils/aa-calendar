import base from './webpack.base.config.babel.js';

const config = base.getConfig({
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
});

export default config;
