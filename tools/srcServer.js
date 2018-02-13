import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import favicon from 'serve-favicon';
import bills from '../src/assets/data/bills.json';
import user from '../src/assets/data/user.json';

/* eslint-disable no-console */

const port = 3002;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/data', (req, res) => {
  res.send(bills)
});

app.get('/user', (req, res) => {
  res.send(user)
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Now listening on port", port)

    open(`http://localhost:${port}`);
  }
});
