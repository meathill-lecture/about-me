const fs = require('fs');
const marked = require('marked');
const cheerio = require('cheerio');
const cdn = require('../cdn.json');

const utils = module.exports = {};

utils.readMeta = function (filename, url) {
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
      meta.url = url;

      return [meta, content];
    })
    .catch( err => {
      console.log(err, filename);
    });
};

utils.toCDN = function toCDN(match, key, source) {
  source = source.replace(/dist\//, '');
  source = /.min.(js|css)$/.test(source) ? source : source.replace(/.(js|css)$/, '.min.$1');
  return cdn[key] + source;
};

utils.copy = function copy(source, to, options) {
  return new Promise( resolve => {
    let read = fs.createReadStream(source);
    read.on('error', err => {
      throw err;
    });

    if (/\/$/.test(to)) { // 以目录结尾
      to += source.substr(source.lastIndexOf('/') + 1);
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
};

utils.md2Slides = function md2Slides(markdown) {
  let pages = markdown.split('--------');
  pages = pages.map( page => {
    let sections = page.split('========');
    if (sections.length === 1) {
      return createSection(sections[0]);
    }
    sections = sections.map( section => {
      return createSection(section);
    });
    return '<section>' + sections.join('\r') + '</section>';
  });
  return pages.join('\r');
};

function createSection(section) {
  let contents = section.split(/^Note:/mgi);
  section = '<section>' + marked(contents[0]) + '</section>';
  section = section.replace(/<!-- \.element: (.*?) -->/gi, '<element $1></element>');
  let $ = cheerio.load(section, {
    decodeEntities: false
  });
  $('element').each( function () {
    let node = $(this);
    let prev = node.prev();
    let attrs = node.attr();
    for (let key in attrs) {
      if (!attrs.hasOwnProperty(key)) {
        continue;
      }
      prev.attr(key, attrs[key]);
    }
  }).remove();
  return $.html();
}