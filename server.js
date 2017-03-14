/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
// const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const server = require('./service/search/Searcher');
const model = require('./service/search/gen-nodejs/ESmodel_types');

// if (isDeveloping) {
//   const compiler = webpack(config);
//   const middleware = webpackMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     contentBase: 'src',
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false
//     }
//   });

//   app.use(middleware);
//   app.use(webpackHotMiddleware(compiler));
//   app.get('*', function response(req, res) {
//     res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
//     res.end();
//   });
// } else {
app.get('/data',function response(req,res) {
  var qm = new model.TQueryModel();
  qm.queryString = req.param('queryString');
  // qm.queryString = '*:*';
  qm.a_from = new Date('2017-1-1 00:00:00').getTime();
  qm.a_to = new Date().getTime();
  if(qm.queryString.indexOf('|')<0){
    server.query(qm,function (data) {
      res.send(data);
    });
  } else {
    server.queryReport(qm,function (data) {
      res.send(data);
    });
  }
});
app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
    console.log('template:' + __dirname);
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// }

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
