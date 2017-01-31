/**
 * Created by meathill on 2016/12/5.
 */

'use strict';

const DEST = 'docs/';
const SRC_REG = /(?:..\/..\/)?node_modules\/([\w.-]+)\/(.*\.(?:js|css))/g;

let fs = require('fs')
  , gulp = require('gulp')
  , sequence = require('run-sequence')
  , stylus = require('gulp-stylus')
  , cleanCSS = require('gulp-clean-css')
  , minifyHTML = require('html-minifier').minify
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , replace = require('gulp-replace')
  , copy = require('gulp-copy')
  , del = require('del')
  , marked = require('marked')
  , cheerio = require('cheerio')
  , Handlebars = require('handlebars')
  , mkdirp = require('mkdirp')
  , cdn = require('./cdn.json');

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
  return gulp.src(['./app/*.js', '!./app/define.js'])
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
  files = files.map((name, index) => {
    let lessonPath = path + name;
    let stat = fs.statSync(lessonPath);
    if (stat.isDirectory()) {
      let html = fs.readFileSync(lessonPath + '/index.html', 'utf8');
      html = html.replace(SRC_REG, toCDN);
      let $ = cheerio.load(html);
      let title = $('title').text();
      let thumbnail = $('[name=thumbnail]').attr('content');
      let description = $('[name=description]').attr('content');
      gulp.src(lessonPath + '/*.md')
        .pipe(gulp.dest(DEST + lessonPath));
      if (!fs.existsSync(DEST + lessonPath)) {
        mkdirp.sync(DEST + lessonPath);
      }
      fs.writeFileSync(DEST + lessonPath + '/index.html', html, 'utf8');
      return {
        url: lessonPath + '/',
        title: title,
        thumbnail: thumbnail,
        description: description
      }
    } else {
      return false;
    }
  }).filter((value) => {
    return !!value;
  });
  return new Promise((resolve, reject) => {
    fs.writeFile(path + 'all.json', JSON.stringify(files), 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
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

function toCDN(match, key, js) {
  js = js.replace(/dist\//, '');
  js = /.min.js/.test(js) ? js : js.replace(/.js$/, '.min.js');
  return cdn[key] + js;
}