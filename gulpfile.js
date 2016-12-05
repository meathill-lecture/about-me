/**
 * Created by meathill on 2016/12/5.
 */

'use strict';

const DEST = 'docs/';
const SRC_EXP = /(href|src)="(node_modules\/.*)\.(js|css)"/g;

let fs = require('fs')
  , gulp = require('gulp')
  , sequence = require('run-sequence')
  , stylus = require('gulp-stylus')
  , minifyCSS = require('gulp-minify-css')
  , minifyHTML = require('html-minifier').minify
  , uglify = require('gulp-uglify')
  , del = require('del')
  , marked = require('marked')
  , cdn = require('./cdn.json');

gulp.task('clear', () => {
  return del(DEST + '*');
});

gulp.task('stylus', () => {
  return gulp.src('./styl/screen.styl')
    .pipe(stylus())
    .pipe(minifyCSS())
    .pipe(gulp.dest(DEST + 'css/'));
});

gulp.task('js', () => {
  return gulp.src('./app/main.js')
    .pipe(uglify({
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }))
    .pipe(gulp.dest(DEST + 'app/'));
});

gulp.task('html', () => {
  let html = fs.readFileSync('./index.dev.html', 'utf8');
  // 去掉 define.js
  html = html.replace('<script src="app/define.js"></script>', '');
  // 将库换成 CDN 地址
  html = html.replace(SRC_EXP, (match, attr, src, ext) => {
    let filename = src.substr(src.lastIndexOf('/') + 1);
    let key = filename.substr(0, filename.indexOf('.'));
    return attr + '="' + cdn[key].replace('{{filename}}', filename + '.' + ext)
        .replace('{{ext}}', ext) + '"';
  });
  // 替换 readme 中的内容
  let readme = fs.readFileSync('./README.md', 'utf8');
  readme = marked(readme);
  html = html.replace('<!-- readme -->', readme);
  // 压缩 html
  html = minifyHTML(html, {
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
    ['stylus', 'js', 'html'],
    taskDone
  );
});