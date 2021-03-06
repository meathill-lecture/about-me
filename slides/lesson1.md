<!--
title: 第一课：前端概述
description: 《“个人网站”开发实战》第一课：前端概述。本堂课以概念讲授为主，主要讲解前端开发的特点、前端开发的演化、现代化前端开发的特点等。希望为接下来的课程打好基础。
keywords: 现代化前端
thumbnail: http://qiniu.meathill.com/wp-content/uploads/2016/12/MG_5350-768x512.jpg
-->

### “个人网站”开发实战 第一课
# 前端概论

### 讲师：翟路佳

Note:
大家好，欢迎来到《“个人网站”开发实战》教程。我是讲师翟路佳。

--------

| 教程二维码 | 本节课二维码 |
|----|----|
| ![教程网站](../img/qrcode/home.png) | ![本节课教案](../img/qrcode/lesson1.png) |
<!-- .element: class="t-a-c" -->

Note:
您可以扫描二维码，在线查看幻灯片。

--------

## 自我介绍

![翟路佳靓照](http://qiniu.meathill.com/wp-content/uploads/2016/07/20160607_005422423_iOS-825x510.jpg)<!-- .element: height="400" -->

<small><small>2016年4月摄于台湾宜兰</small></small>

Note: 正式开讲之前，先做下自我介绍。

========

## 我叫翟路佳

### 花名肉山，英文名 Meathill

热爱编程，喜欢分享。2006年开始做前端，切过图，写过 Flash 游戏。近几年创业，转向全栈。现居广州。

以下是我的联系方式：

<p class="social-links">
  [<i class="fa fa-user"></i>](http://blog.meathill.com/)
  [<i class="fa fa-weibo"></i>](//weibo.com/meathill)
  [<i class="fa fa-github"></i>](//github.com/meathill)
  [<i class="fa fa-envelope"></i>](mailto:meathill@gmail.com)
</p>


Note:
我叫翟路佳，花名“肉山”，英文名“Meathill”。这个花名跟 dota 没有关系，作为一名80后，我开始叫肉山的时候还没有 dota。

编程对我来说，既是爱好，也是工作。我喜欢写代码，喜欢学习新技术，喜欢拿着锤子找钉子。我 2006 年参加工作，基本上一直在一线做开发，我希望继续做下去，把程序员作为终身职业。我切过图；开发过 Flash；也用 JavaScript 写过大型应用。一路从 IE6 统治世界的黑暗时刻，走到最近几年前端大发展，大变革。

我喜欢分享，希望把知识技能工具分享给更多行业内的小伙伴。我相信只有大家的能力都提升了，整个职业才能更被重视，更有价值。

我目前居住在广州，你可以通过上面几个联系方式找到我。

因为第一次做视频课程，经验不足，可能会有各种问题，欢迎大家反馈。

--------

#### 课程介绍

## “个人网站”开发实战

本套课程着重讲授“现代化前端开发”的常用技术、常用工具。

Note:
接下来介绍课程。本课程讲授现代化前端开发的常用技术、常用工具，并视频演示操作过程。希望带领大家了解前端开发的最新技术和常用工具，提高效率，少走弯路。

========

主要面向：

1. 有一定前端工作经验，寻求提升技能和视野
2. 有其它方面工作经验，来拓展前端技能树

Note:
之前我和网站工作人员沟通，听她们说，未来看视频的人，主要是 _（上面两类）_。

========

我假设各位观众：

1. 熟练使用电脑
2. 受过基础编程训练
3. 具备一定英文基础
4. 了解 HTML，知道 CSS，能看懂 JavaScript

Note:
（复述本页）

希望这个假设是对的。如果对课程设置和内容细节有意见和建议，请通过各种渠道反馈给我。谢谢。

--------

## 课程大纲

1. 前端概论
2. 使用 Bootstrap 完成页面结构
3. 使用 Stylus 开发 CSS
4. 使用 Gulp 批处理工具
5. 使用 Git 进行版本管理
6. 自动更新“最近博文”
7. 响应式设计和调试
8. 网页加载机制入门

Note:
好的，简介结束，现在来看课程大纲。整套课程大纲共分八节，先讲框架选择，然后是 CSS 预处理工具，再到批处理工具，然后是版本管理，接下来是 JS，再接着介绍响应式，最后是进阶内容：网页加载机制。

我希望覆盖到现代化前端开发的各个方面，学完本课程之后，大家不仅知道怎么做，还知道为什么要这么做，以及最佳实践是什么。

--------

#### 本节内容
## 前端概论

1. 什么是前端？
2. 前端的现状
3. 前端的技术特点
4. 现代化前端开发
5. “Hello，world”

Note:
现在开始第一节课：前端概论。

本节课，我计划讲这些内容

（复述本页）

（3. 为什么会产生这样的现状）

（4. 因为有了这些特点，有了这些现状，才会慢慢演化出现代化的前端开发）

--------

何为现代化的前端开发？为什么要学习现代化的前端开发？

Note:
本节课主要为回答这个问题。

可能在有些同学眼中，前端不就是学点 HTML 标签，学点 CSS 属性，遇到效果交互就拿 jQuery 怼一切，不就完了么？你们这些老前端以前不正是这么干的么？为啥现在整出来那么多东西要我们学呢？

其中，正因为我们之前这么做了，吃亏了，才会想办法改进工作流。前端工具框架虽多，但各有各的用处。我希望大家通过学习本节课，可以对前端有比较充分的理解，能够知道为什么前端变化这么快、这么大；为什么各种工具、框架、技术层出不穷；应该选择哪些工具框架来学习。

--------

## 什么是前端？

Note:
首先，什么是前端？

========

| 用户 | -- | 界面 | -- | 服务 | --  | 数据库 | -- | 数据 |
|-----|-----|-----|----|------|-----|-------|-----|-----|
| | | <i class="fa fa-arrow-up"></i> | | | | <i class="fa fa-arrow-up"></i> | | |
| | | 前端 | | | | 后端 | | |
<!-- .element: class="t-a-c no-border" -->

&nbsp;

* 靠近用户的，界面逻辑和交互逻辑的部分，是**前端**
* 靠近数据的，数理逻辑和业务逻辑的部分，是**后端**

Note:
通常来讲，靠近用户的，用户可以直接接触到，也就是 UI、交互这部分，叫前端；离用户比较远，主要进行数据处理的这部分，叫后端。具体到技术上，前端后端是相对的概念，并非所有公司定义都一致。比如我有个堂哥写 Java 的，在他们公司也算前端。

========

课程中的定义：

* 以 HTML、CSS、JavaScript 等 Web 技术为载体
* 开发内容为直接交付用户使用的网站、应用
* 运行在浏览器或者 Webview 当中

Note:
所以，我必须把它限定到一个范围内，方便沟通。本套教程中，前端的定义都是：

_（复述本页）_

现在大部分互联网公司也都是这么定义的。

--------

## 前端的现状

前端招聘市场是火热的。

![脉脉的招聘推荐](http://blog.meathill.com/wp-content/uploads/2016/12/momo.jpg)
<!-- .element: class="mh400" -->

Note:
就拿招聘来说吧，前端市场是火热的。

这是我用“脉脉”截的图，每天它会推荐两个职位给我。可以看到，前端或者说高级前端的待遇还是不错的。据我了解，大部分公司对给前端开出的待遇都挺好的。

这也是有原因的，基本上，前端就业市场面临一对矛盾。

========

### 市场需求巨大

1. 8亿互联网用户
2. 标准、通用、且免费
3. 用户越来越高的期待

Note:
一方面，市场需求相当巨大。

1. 按照微信公布的数据，它有大约8亿注册用户，我们基本上可以认为中国有8亿互联网用户。这在任何行业看来都有很大的想象空间。
2. Web 技术“标准、通用、且免费”，意味着开发成本很低，大家都愿意在这个平台上做产品
3. 网页最开始只能展示文字，后来有图形、声音，然后可以播放视频，甚至可以玩游戏，做日常工作。用户的期待水涨船高，随便找个人做个页面放点文字上去已经不行了，必须招前端工程师做又好看又好用还能兼容移动端的网页才行。

于是，Web 技术就成为开发产品的不二之选；使用 Web 技术开发产品的前端也就成了香饽饽。

========

### 供给相当低迷

1. 学校教的少
2. 学校教的落后
3. 门槛低，入行容易，提升困难

Note:
但是，“有实力的前端”，供给却相当低迷。原因我觉得也不外乎这几点：

1. 学校教的少。我当年学校里就没有开设专门的课程，只有《网页制作》算是沾点边，也就是拿 Dreamweaver 做个简单页面。
2. 学校教的落后。即使开了课，也很少能够得上工作中的实际需要，尤其前端这些年发展迅猛。
3. 相对其他语言来说，前端入行门槛低。HTML、CSS 拿记事本都写的出来，扔到浏览器里就能预览，不像其它语言配环境就搞半天。但是想写出功能强又稳定的产品还是会遇到各种各样难以解决的问题。

成为一个前端不难，想做好了，成为“有实力”的前端，则不太容易。

这一切都是由前段的技术特点决定。

--------

## 前端开发的技术特点

1. 起步晚
2. 基于浏览器
3. 标准・通用・免费

Note:
大约有3条，接下来逐一讲解。

--------

### 1. 起步晚

现代化的前端，诞生于2005年《网页重构》一书出版。

更深层的原因是：经过几年发展，浏览器已经很强力了，但是应用还没跟上。

这本书告诉大家，其实网页可以做的更好。

Note:
更早的时候，还没有“前端工程师”这个岗位，前端开发的工作一般由设计师和后端工程师两方兼任。设计师完成设计图后，会再把静态网页写出来。设计师懂编程的不多，所以之后会交给后端程序员接手。后端程序员会负责弄轮播图、漂浮广告之类的 JS，然后顺便把页面嵌入后端代码，比如PHP，当中。

现代化前端的开始，通常认为以《网页重构》一书的流行位标识。而深层次的原因，则是经过几年发展，浏览器已经很强力了，足够驱动更丰富的应用。当时已经有了 Ajax、DHTML、CSS，结合这些技术，可以做很多高级应用，比如 Gmail。

这本书告诉大家，其实网页可以做的更好。但是，最好有专门的人来做，这些人，比设计师擅长写代码；比后端程序员，有更关心交互和用户体验。于是我们所说的前端工程师，就此诞生。

========

起步晚的结果：

1. 学校难以跟上
2. 场面混乱，各路英豪涌现
3. 缺少工业标准

Note:
起步晚带来了3个结果：

1. （复述）
2. 前端开始成型的时候，很多其他语言、技术都已经发展成熟，很多前端高手是从其它语言转过来的，自然会带来各自原先领域里的好东西，他们目的是好的，但结果就是前端界场面极其混乱，各种概念技术产品工具，以及嘴仗，层出不穷，令人眼花缭乱
3. 因为每个技术都有不少使用者和拥护者，甚至有厂家背景，所以又缺少工业标准。前端界在大方向上是统一的，但是很多细节都是各搞各的。

========

对前端人员的影响：

1. 学校不教 -> 需要自学
2. 场面混乱 -> 需要不断尝鲜
3. 缺少标准 -> 尽量多了解，积累兼容性经验

Note:
（复述本页）

--------

### 2. 基于浏览器

有 <strong class="red">好处</strong>，也有 <strong class="red">坏处</strong>

Note:
与原生开发者比起来，我们既是幸运的，又是不幸的。幸运的是，我们可以不那么在意设备之间的差异，因为大部分技术对我们来说是一致的。不幸的是，在浏览器上最开发，形同戴着镣铐跳舞，没有那么轻松。

========

|     | Web | 原生 |
|-----|-----|------|
| 性能 | 渲染性能很低，计算性能略好，但还是低 | 享受机器 100% 性能 |
| 资源 | 只能利用有限资源 | 机器上有什么就能用什么 |
| 安装方式 | 即开即用 | 先安装后使用 |
| 开发语言 | HTML+CSS+JS | 多半只需一种 |
| 部署方式 | 需要等待浏览器普及 | 依赖系统 |

Note:
我们来简单对比一下，Web 和 原生之间的差异。（复述本页）

========

#### 坏处

1. 性能不佳
2. 能用什么资源一看设备、二看浏览器
3. 用户对打开速度很敏感
4. 需要掌握多种语言+多种工具
5. 浏览器存在兼容性差异
6. 新特性需要等待用户升级

Note:
（复述本页）

========

#### 好处

1. 跨平台
2. 使用成本低，会有更多用户
3. HTML 和 CSS 入门很容易

Note:
（复述本页）

--------

### 3. 标准・通用・免费

W3C——“唯一”的标准制定者

Note:
前端开发的第三个技术特点，也就是促成前端开发近几年大发展的前提，便是它“标准，通用，免费”。

为了解决网页在不同浏览器表现不一致，造成不兼容问题，诞生了 W3C 组织。他们制定了一系列标准，并且督促 Web 应用开发者——主要是浏览器开发商——遵循这些标准。经过多年努力，现在大部分浏览器都能支持或者部分支持这一套标准。

当然，统一大业任重道远，到现在也远远没有完成统一，只不过，绝大多数网页，以及其中绝大部分功能，都能在绝大部分浏览器里正常运行。

========

几乎在任何平台，都能找到比较完整的实现。

Note:

========

这些东西是免费的，完全不用担心版权。

Note:
相比之下，Google 的 Android 系统使用了 Java，Oracle 目前仍在起诉，要求巨额授权金。

========

“标准・通用・免费”的结果：

1. 大大降低成本
2. 大大降低产品价格
3. 大量个人、组织使用 Web 平台提供产品
4. 大量用户在 Web 平台上消费产品。

Note:
1. 大大降低开发成本
2. 大大降低雇佣成本
3. 大大降低部署成本
4. 大大降低推广成本
--------

### 前端的其它问题

1. HTML 和 CSS 可编程性很差
2. JavaScript 没有包管理

Note:
另外，单从语言的角度来讲，前端还面临一些其它问题。

1. HTML 和 CSS 很容易写，但可编程性很差。没有循环，没有条件判断，要干多少事儿就要写多少行代码，费时费力。一旦需要修改，就要手动修改很多地方，难以维护。
2. JavaScript 也有很多设计问题，比如缺少面向对象，没有块作用域，没有包管理，等等。尤其是包管理这个，产生的解决方案最多。

--------

## 现代化前端开发

> “现代化前端开发”，就是利用各种框架、库、工具，弥补各种不足，突破各种限制的“前端开发”。

Note:
其实，（复述本页）

========

### 问题1：HTML 和 CSS 编程性差

解决方案：

1. **模板引擎**
    1. <strong class="red">Handlebars</strong>
    2. Jade
2. **CSS 预处理工具**
    1. Sass
    2. Less
    3. <strong class="red">Stylus</strong>

Note:
HTML 方面可以用模板引擎来解决。CSS 则可以引入预处理工具。

标红的部分是本套教程后面会选用的方案。

========

### 问题2：JavaScript 没有包管理

解决方案：

**AMD CMD CommonJS**
1. require.js
2. sea.js

**打包工具**
1. browserify
2. webpack

========

### 问题3：用户对打开速度敏感

解决方案：

1. **提升首屏打开速率**
2. **压缩文件体积**
3. **使用 CDN，增加域名**

========

### 问题4：浏览器兼容性问题

解决方案：

1. **使用框架**
    1. <strong class="red">Bootstrap</strong>
    2. Polyfill
    3. Babel
2. **针对特殊浏览器写特殊代码**

Note:
需要注意，这3个框架不存在竞争或者排他关系，纯粹是解决3个不同问题的框架。

(2. 然后利用打包工具，将特殊代码打包在一起，单独调用)

========

兵来将挡，水来土掩。

现代化前端开发光明无限。

学习现代化前端开发，请关注我的教程。

Note:
所谓“兵来将挡，水来土掩”，几乎所有问题，都能找到对应的解决方案。正是在这样的乐观积极态度下，前端开发的环境越来越好，越来越强大。当然坏处就是学习曲线越来越陡峭，不过没关系，关注我的教程，你也会更强大。

--------

## 基础工具选择

工欲善其事，必先利其器。

为了接下来的课程，我们需要先准备以下工具：

========

#### 1. 开发工具

### VSCode

非常好用的 IDE，插件丰富，开源免费。

[官网地址](//code.visualstudio.com) [下载地址](//code.visualstudio.com/Download)

<small>其它可选：[Webstorm](//www.jetbrains.com/webstorm/)</small>

========

### 2. Node.js 环境

开发调试必须

[下载地址](//nodejs.org/en/)

========

#### 3. 浏览器

### Chrome

快速，强大，更新及时，开发者工具非常好用。

[下载地址](//www.google.com/chrome/browser/desktop/)

--------

### 4. cmder

命令行工具，解决 Windows 命令提示符的各种问题。

[下载地址](http://cmder.net/)

--------

## Hello, World

--------

## 作业

请参考前面的教程

1. 下载并安装 IDE
2. 下载并安装 Node.js
3. 下载并安装 Chrome 浏览器

--------

## 扩展阅读

1. [Bootstrap](//getbootstrap.com)
2. [caniuse](//caniuse.com) 浏览器兼容性速查
3. [CodePen](//codepen.io) 在线代码编辑预览效果
4. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)