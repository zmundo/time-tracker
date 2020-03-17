const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const port = 3000;
const config = require('../webpack.config.js');

const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(port, () => console.log('App is listening'));
