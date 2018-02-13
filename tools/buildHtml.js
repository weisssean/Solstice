import fs from 'fs';
import cheerio from 'cheerio';


/* eslint-disable no-console */

fs.createReadStream('public/index.html').pipe(fs.createWriteStream('dist/index.html'));
fs.createReadStream('public/bills.php').pipe(fs.createWriteStream('dist/bills.php'));
fs.createReadStream('public/user.php').pipe(fs.createWriteStream('dist/user.php'));

// fs.readFile('src/index.php', 'utf8', (err, markup) => {
//   if (err) {
//     return console.log(err);
//   }
//
//   const $ = cheerio.load(markup);
//
//   $('head').prepend('<link rel="stylesheet" href="styles.css">');
//
//   fs.writeFile('dist/index.php', $.html(), 'utf8', err => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('index.php written to /dist'.green);
//   });
// });
