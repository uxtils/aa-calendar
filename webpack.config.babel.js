import base from './webpack.base.config.babel.js';

const devServer = {
  port: 8080,
  host: 'localhost',
  contentBase: `${__dirname}/src`,
  stats: {
    chunks: false,
  },
};

const config = base.getConfig({
  devServer,
  devtool: 'eval',
  debug: true,
});

export default config;
