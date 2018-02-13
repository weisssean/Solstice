import express from "express";
import path from "path";
import fs from "fs";
import compression from 'compression';
import favicon from 'serve-favicon';
import bills from '../src/assets/data/bills.json';
import user from '../src/assets/data/user.json';

/* eslint-disable no-console */

const port = 3003;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, "..","src","assets", "images", "solstice-logo.png")));

app.get('/data', (req, res) => {
  res.send(bills)
});

app.get('/user', (req, res) => {
  res.send(user)
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, function (err) {
});

export default {};
