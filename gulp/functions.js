const fs = require('fs');
const cdn = require('../cdn.json');

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
        row = row.split(/:\s+/);
        meta[row[0]] = row[1];
      });

      return meta;
    })
    .catch( err => {
      console.log(err, filename);
    });
};

utils.toCDN = function toCDN(match, key, source) {
  source = source.replace(/dist\//, '');
  source = /.min.(js|css)$/.test(source) ? source : source.replace(/.(js|css)$/, '.min.$1');
  return cdn[key] + source;
}

utils.copy = function copy(source, to, options) {
  return new Promise( resolve => {
    let read = fs.createReadStream(source);
    read.on('error', err => {
      throw err;
    });

    if (/\/$/.test(to)) { // 以目录结尾
      let filename = source.substr(source.lastIndexOf('/') + 1);
      to += filename;
    }
    let write = fs.createWriteStream(to);
    write.on('error', err => {
      throw err;
    });
    write.on('finish', ()=> {
      resolve(options);
    });

    read.pipe(write);
  });
}