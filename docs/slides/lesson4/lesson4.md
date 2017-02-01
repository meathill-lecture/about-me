<!--
title: 第四课：Gulp
description: 《“个人网站”开发实战》第四课：Gulp。本堂课介绍批处理工具 Gulp。它主要通过执行批处理脚本工作，可以帮助我们处理重复性工作，节省大量的时间。利用丰富的插件，可以高效的完成各种各样的工作。可以说，会不会用批处理工具，了解多少批处理工具，决定着开发者效率的高低。
keywords: gulp
thumbnail: http://qiniu.meathill.com/wp-content/uploads/2017/02/20150107_120425909_iOS-768x576.jpg
-->

### “个人网站”开发实战 第四课
# Gulp

### 讲师：翟路佳

--------

| 教程二维码 | 本节课二维码 |
|----|----|
| ![教程网站](../../img/qrcode/home.png) | ![本节课教案](../../img/qrcode/lesson4.png) |
<!-- .element: class="t-a-c" -->

--------

## 本节课程大纲

1. 批处理工具？
2. Gulp 简介
3. 编写 `gulpfile.js`

--------

## 批处理工具

--------

### 何为批处理工具

> 将一系列命令，按一定顺序执行，即为批处理。

例子：

1. *.bat
2. Ant
3. 脚本

--------

### 为何要使用批处理工具

1. 越来越多的中间代码
2. 越来越多的设备适配
3. 其它语言早有成熟经验

--------

## Gulp

[官网](http://gulpjs.com/)

安装

```bash
npm install gulp-cli -g
npm install gulp --save-dev
```

帮助

```bash
gulp --help
```

--------

## 为何选用 Gulp

1. 使用方便，插件丰富
2. 配置文件是纯 JS
3. 运行效率高

--------

`gulpfile.js`

```javascript
var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('default', [ 'html', 'css' ]);
```

--------

执行

```bash
gulp [task]
```

--------

## 编写 `gulpfile.js`