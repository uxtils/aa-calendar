import base from './webpack.base.config.babel.js';

const devServer = {
  port: 8080,
  host: 'ux.ts',
  contentBase: `${__dirname}/src`,
};

const config = base.getConfig({
  devServer,
  devtool: 'eval',
  debug: true,
});

export default config;
