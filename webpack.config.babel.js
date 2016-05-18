import base from './webpack.base.config.babel.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServer = {
  port: 8080,
  host: 'ux.ts',
  contentBase: `${__dirname}/src`,
};

const config = base.getConfig({
  devServer,
  devtool: 'eval',
  debug: true,
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      },
      template: './src/index.html',
      inject: 'body',
      chunks: ['app'],
    }),
  ],
});

export default config;
