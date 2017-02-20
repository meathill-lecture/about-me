/**
 * Created by meathill on 2016/12/9.
 */
'use strict';

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  slideNumber: true,
  showNotes: true,

  theme: Reveal.getQueryHash().theme,
  transition: Reveal.getQueryHash().transition || 'default',

  dependencies: [
    {
      src: '../../node_modules/marked/marked.min.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: '../../node_modules/reveal.js/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: '../../node_modules/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: '../../node_modules/reveal.js/plugin/notes/notes.js',
      async: true
    }
  ]
});

// QQ 统计
( function(id) {
  var script = document.createElement('script');
  script.src = '//tajs.qq.com/stats?sId=' + id;
  script.charset = 'UTF-8';
  script.async = 1;
  var scripts = document.getElementsByTagName('script');
  var last = scripts[scripts.length - 1];
  last.parentNode.insertBefore(script, last);
}(59876390));