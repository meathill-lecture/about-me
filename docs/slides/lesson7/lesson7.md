<!--
title: 第七课：响应式
description: 《“个人网站”开发实战》第七课：响应式。本堂课我们学习使用响应式设计，以便让网页在更多的设备上取得理想的显示效果。
keywords: 响应式,response design
thumbnail: http://qiniu.meathill.com/wp-content/uploads/2017/02/WP_20130927_001-768x433.jpg
-->

### “个人网站”开发实战 第七课
# 响应式

### 讲师：翟路佳

--------

| 教程二维码 | 本节课二维码 |
|----|----|
| ![教程网站](../../img/qrcode/home.png) | ![本节课教案](../../img/qrcode/lesson7.png) |
<!-- .element: class="t-a-c" -->

--------

## 本节课程大纲

1. 响应式设计简介
2. 如何使用响应式
3. 不同设备的分辨率
4. 在 Chrome 下调试网页

--------

## 响应式设计简介

> 响应式网页设计（英语：Responsive web design，通常缩写为RWD），或称自适应网页设计、回应式网页设计、对应式网页设计。 是一种网页设计的技术做法，该设计可使网站在多种浏览设备（从桌面电脑显示器到移动电话或其他移动产品设备）上阅读和导航，同时减少缩放、平移和滚动。
> --[Wiki](https://zh.wikipedia.org/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1)

========

> 简单来说，就是在桌面电脑上呈现一种样式，在手机上呈现另一种样式，在 iPad 上又呈现出别的样式。

![响应式设计范例](http://cdn.uehtml.com/201403/1394784374161.jpg)

--------

### 响应式的优势

1. 只需要一套 HTML + CSS
2. 没有重定向，没有服务器端渲染
3.

--------

### 响应式的劣势

1. 增加开发量，增加学习成本
2. 有些页面在不同设备上有完全不同的界面需求
3. 资源不容易响应式，可能加重移动设备的加载负担

--------

## 如何使用响应式

硬性要求：

1.

```html
<head>
  <meta name="viewport" content="initial-scale=1, minimum-scale=1, user-scalable=no">
</head>
```

2.

```css
@media (max-width: 768px) {

}
```

========

1. 多用百分比，少用绝对尺寸
2. 使用 Bootstrap 等框架

--------

## 常见设备分辨率

| 设备 | 分辨率 |
|------|-------|
| iPhone 4 | 320x480 |
| iPhone 5 | 320x568 |
| iPhone 6 | 375x667 |
| iPhone 6 Plus | 414x736 |
| 常见 Android | 360x640 |

--------

### 开发“最新博文”