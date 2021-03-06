大纲
========

## 1. 前端概论

1. 介绍前端开发的特点
    1. 重视视觉
    2. 重视交互
    3. 重视用户体验
2. 现代化的前端开发
    1. 源码未必部署在生产环境中
    2. 大量使用工具辅助开发
    3. 使用 git 进行版本管理
    4. 必须考虑移动端使用
3. 介绍基础工具（以免费为主）
    1. VS Code
    2. Node.js
    3. npm
4. Hello World

### 备课

1. 高保真设计图
2. 设计稿（截图）
3. 相关内容课件

### 作业

1. 配置自己的项目

## 2. Bootstrap

此小节包含两个课时。

1. Bootstrap 是目前最流行的前端框架
    1. 优势：
        * 使用方便，基本只用 CSS 就可以
        * 侵入性低，不影响使用其它库
        * 功能强大，可以很容易开发出响应式的页面
        * 开源社区强大，资源丰富
    2. 安装
        * CDN
        * 使用 npm
2. Bootstrap 栅格化设计
3. 需求分解
4. **[示范]** 使用 Bootstrap 制作页面
    1. 导航
    2. 首屏大图
    3. 名片 + 简历
    4. 技能
    5. 特长
    6. 作品集
    7. 近期博文
    8. 联系我
    9. 底部

### 备课

1. 完成的代码
2. 课件

### 作业

1. 完成本课内完成的页面

## 3. 使用 Stylus 完成剩下的样式

1. 什么是 Stylus？
    1. Stylus 是一种 CSS 预处理工具
    2. Stylus 基于 Node.js
2. 为什么使用 Stylus？
    1. CSS 缺少语言特性，没有变量、函数，难以复用，难以维护
    2. 现代网站需要大量 CSS，纯手写效率太低
    3. Stylus（及其它预处理工具）还提供了一些有用的特性，比如缩进
    4. Stylus 基于 Node.js，便于学习
3. 应该怎么使用 Stylus
    1. 不要仅仅用它来写 CSS
    2. 简单的架构
4. **[示范]** 用 Stylus 完成剩下的样式
5. **[示范]** 头像小组件
6. **[示范]** 简历小组件

### 备课

1. 完成的代码
2. 课件

### 作业

1. 完成本课内完成的页面

## 4. 使用 Gulp 批处理工具

1. 什么是 Gulp？
    1. Gulp 是一种批处理工具，可以帮助我们完成很多繁琐的工作
    2. Gulp 有多个插件，负责不同功能
2. 为什么用 Gulp？
    1. 开发环境和生产环境对代码的需求是不一样的
    2. 有一些琐碎的事情，我们不希望被它打扰
    3. Gulp 很流行，掌握了对理解别人的代码很有帮助
3. **[示范]** Gulp watch

### 备课

1. 完成的代码
2. 课件

### 作业

1. 完成 Gulpfile.js

## 5. 使用 Git 管理代码

1. 什么是 Git？
    1. Git 是一种版本管理工具
    2. Git 是 Linux 的作者 Linus 创造的工具
    3. Git 是分布式的版本管理工具
2. 什么是 GitHub？
    1. GitHub 是现在全球最大的代码托管共享网站
    2. GitHub 对个人开源项目来说是免费的
3. 为什么选择它们？
    1. 免费 + 好用
    2. 几乎全部开源代码都在上面，有利于学习和共享
    3. GitHub 提供 GitHub Pages，可以用来托管静态网站，如本例
4. **[示范]** 创建 GitHub 帐号
5. **[示范]** 创建 GitHub 仓库
6. **[示范]** 安装乌龟 Git 客户端
7. **[示范]** 提交代码到 GitHub
8. **[示范]** 访问生成的网站

### 备课

1. 课件

### 作业

1. 创建个人网站

## 6. 更新“近期博文”

1. **[示范]** 使用 jQuery 访问远程数据
2. **[示范]** 使用 Handlebars 操作模板
3. **[示范]** 使用本地存储制作小红点

### 备课

1. 课件
2. 相关代码

### 作业

1. 使用公共 API 开发类似功能

## 7. 响应式

1. 什么是响应式？
    1. 在不同设备及不同分辨率下呈现不同样式
    2. 解决移动设备访问的问题
    3. 响应式设计 Responsive Web Design
2. 如何使用响应式？
    1. `<meta name="viewport">`
    2. Bootstrap
    3. `media query`
3. 不同移动设备分辨率
4. **[示范]** 在 Chrome 里调试响应式

### 备课

1. 课件

### 作业

1. 练习使用 Chrome 调试响应式

## 8. 网页加载、渲染机制

1. 网页是如何加载的
2. 网页是如何渲染的
3. **[示范]** 开发一个小小的 Loading

### 备课

1. 课件
2. 相关代码

### 作业

1. 完成 Loading 界面