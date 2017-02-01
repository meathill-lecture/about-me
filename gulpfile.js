/**
 * Created by meathill on 2016/12/5.
 */

'use strict';

const DEST = 'docs/';
const SRC_REG = /(?:..\/)*node_modules\/([\w.-]+)\/(.*\.(?:js|css))/g;

let fs = require('fs')
  , gulp = require('gulp')
  , sequence = require('run-sequence')
  , stylus = require('gulp-stylus')
  , cleanCSS = require('gulp-clean-css')
  , minifyHTML = require('html-minifier').minify
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , replace = require('gulp-replace')
  , del = require('del')
  , marked = require('marked')
  , cheerio = require('cheerio')
  , Handlebars = require('handlebars')
  , mkdirp = require('mkdirp');
const {copy, readMeta, toCDN} = require('./gulp/functions');

gulp.task('clear', () => {
  return del(DEST + '*');
});

gulp.task('stylus', () => {
  return gulp.src('./styl/*.styl')
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest(DEST + 'css/'));
});

gulp.task('js', () => {
  return gulp.src(['./app/*.js', '!./app/define.js', '!./app/slide-dev.js'])
    .pipe(replace(SRC_REG, toCDN))
    .pipe(uglify({
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }))
    .pipe(gulp.dest(DEST + 'app/'));
});

gulp.task('slide2json', () => {
  let path = 'slides/';
  let files = fs.readdirSync(path, 'utf8');
  return new Promise( resolve => {
    fs.readFile(path + 'index.dev.html', 'utf8', (err, content) => {
      if (err) {
        throw err;
      }
      content = content.replace(SRC_REG, toCDN);
      content = content.replace(/\.\.\/(js|css)\//g, '../../$1/');
      resolve(Handlebars.compile(content));
    });
  })
    .then( template => {
      return Promise.all(files.filter( filename => {
        return /\.md$/.test(filename);
      }).map( name => {
        let filename = path + name;
        let toFoler = name.slice(0, -3) + '/';
        let destPath = DEST + path + toFoler;
        return new Promise( resolve => {
          mkdirp(destPath, err => {
            if (err) {
              throw err;
            }
            resolve();
          })
        })
          .then( () => { // 读取头信息
            return readMeta(filename);
          })
          .then( meta => { // 生成 html
            meta.markdown = name;
            let html = template(meta);
            let $ = cheerio.load(html, {
              decodeEntities: false
            });
            $('[data-exclude]').remove();
            $('body').append('<script src="../../app/slide.js"></script>');
            return [meta, name, $.html()];
          })
          .then( ([meta, name, html]) => { // 写入 html
            return new Promise( resolve => {
              fs.writeFile(destPath + 'index.html', html, 'utf8', err => {
                if (err) {
                  throw err;
                }
                resolve(meta);
              });
            });
          })
          .then( meta => { // 复制 markdown
            meta.url = path + toFoler;
            return copy(filename, destPath, meta);
          });
      }))
    })
    .then( files => {
      return new Promise( resolve => {
        fs.writeFile(path + 'all.json', JSON.stringify(files), 'utf8', (err) => {
          if (err) {
            throw err;
          }
          resolve();
        });
      });
    });
});

gulp.task('imagemin', () => {
  let avatar = 'img/*';
  return gulp.src(avatar)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(DEST + 'img/'));
});

gulp.task('html', () => {
  let html = fs.readFileSync('./index.dev.html', 'utf8');
  // 将库换成 CDN 地址
  html = html.replace(SRC_REG, toCDN);
  let $ = cheerio.load(html, {
    decodeEntities: false
  });
  // 去掉不需要的js
  $('[data-exclude]').remove();
  // 替换 readme 中的内容
  let readme = fs.readFileSync('./README.md', 'utf8');
  let parts = readme.split('<!-- content -->');
  $('#readme').html(marked(parts[0]));
  $('#others').html(marked(parts[1]));
  // 替换 课程列表
  let lessonsContainer = $('script[type]');
  let template = Handlebars.compile(lessonsContainer.html());
  let lessons = template({
    lessons: JSON.parse(fs.readFileSync('./slides/all.json', 'utf8'))
  });
  lessonsContainer.replaceWith(lessons);
  // 压缩 html
  html = minifyHTML($.html(), {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true
  });
  return new Promise( (resolve, reject) => {
    fs.writeFile(DEST + 'index.html', html, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  })
});

gulp.task('default', (taskDone) => {
  sequence(
    'clear',
    'slide2json',
    ['stylus', 'js', 'html', 'imagemin'],
    taskDone
  );
});