import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";


/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack has the following warnings: '.bold.yellow);
    return jsonStats.warnings.map(warnings => console.log(warnings.yellow));
  }

  console.log(`Webpack states: ${stats}`);

  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!.'.bold.green);

  return 0;
});
