import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';
import favicon from 'serve-favicon';



/* eslint-disable no-console */

const port = 3003;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.use(favicon(path.join(__dirname, "..","src","assets", "images", "solstice-logo.png")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
});
