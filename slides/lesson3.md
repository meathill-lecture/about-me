<!--
title: 第三课：Stylus
description: “个人网站”开发实战》第三课：Stylus。本堂课介绍 CSS 预处理工具：Stylus。CSS 在前端开发中占据非常重要的位置，但是其语言特性又让我们很难进行高效开发。要解决这一难题，需要使用预处理工具。本系列教程选择 Stylus。
keywords: Stylus
thumbnail: http://qiniu.meathill.com/wp-content/uploads/2017/02/20150102_152353504_iOS-768x576.jpg
-->

### “个人网站”开发实战 第二课
# Stylus

### 讲师：翟路佳

--------

| 教程二维码 | 本节课二维码 |
|----|----|
| ![教程网站](../../img/qrcode/home.png) | ![本节课教案](../../img/qrcode/lesson3.png) |
<!-- .element: class="t-a-c" -->

--------

## 本节课程大纲

1. CSS 预处理工具
2. Stylus 简介
3. 使用 Stylus 进行开发

--------

## CSS 预处理工具

========

### CSS 本身的问题

1. 没有变量、没有判断、没有循环、没有函数
2. 浏览器兼容问题
3. 缺少合理的组织能力

--------

解决方案

========

### CSS3

1. 变量 `attr()`
2. 计算属性 `calc()`
3. 固定函数 `count`

========

#### 预处理工具

1. LESS
2. SASS
3. **Stylus**<!-- .element: class="red" -->

--------

## Stylus 简介

[官网](http://stylus-lang.com/) | [在线预览效果](http://stylus-lang.com/try.html)

安装

```bash
npm install stylus -g
```

编译 Stylus 为 CSS
```bash
stylus source/ -o to/
```

--------

### 常见用法演示

Stylus

```stylus
a
  color #333
  text-decoration none
```

CSS

```css
a {
  color: #333;
  text-decoration: none;
}
```

========

层级嵌套

Stylus

```stylus
.lead
  font-size 1.25em

  a
    color #F90
```

CSS

```css
.lead {
  font-size: 1.25em;
}
.lead a {
  color: #F90;
}
```

========

继承上一级

Stylus

```stylus
a
  color #333

  &:hover
    color #F60
```

CSS

```css
a {
  color: #333;
}
a:hover {
  color: #F60;
}
```

========

变量，运算

Stylus

```stylus
gap = 10px

p
  margin-bottom gap * 2
  padding 0 gap
```

CSS

```css
p {
  margin-bottom: 20px;
  padding: 0 10px;
}
```

========

循环

Stylus

```stylus
for deg in -5..5
  .rotate-{deg * 5}
    transform rotate(deg * 5deg)
```

CSS

```css
.rotate--25 {
  transform: rotate(-25deg);
}
.rotate--20 {
  transform: rotate(-20deg);
}
....
.rotate-25 {
  transform: rotate(25deg);
}
```

========

函数（mixin）

Stylus

```stylus
border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments

a.button
  border-radius(5px)
```

CSS

```css
a.button {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

--------

## 使用 Stylus 开发