const fs = require('fs');
const cdn = require('./cdn.json');

let utils = module.exports = {};

utils.readMeta = function (filename) {
  return new Promise( resolve => {
    fs.readFile(filename, 'utf8', (err, content) => {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  })
    .then( content => {
      let meta = content.match(/<!--([\s\S]+?)-->/m);
      let array = meta[1].split(/[\r\n]+/);
      meta = {};
      array.forEach( row => {
        if (!row) {
          return;
        }
        row = row.split(/:\s*/);
        meta[row[0]] = row[1];
      });

      return meta;
    });
};

utils.toCDN = function toCDN(match, key, js) {
  js = js.replace(/dist\//, '');
  js = /.min.js/.test(js) ? js : js.replace(/.js$/, '.min.js');
  return cdn[key] + js;
}

utils.copy = function copy(source, to, options) {
  return new Promise( resolve => {
    let read = fs.createReadStream(source);
    source.on('error', err => {
      throw err;
    });

    let write = fs.createWriteStream(source);
    write.on('error', err => {
      throw err;
    });
    write.on('finish', ()=> {
      resolve(options);
    });

    read.pipe(write);
  });
}