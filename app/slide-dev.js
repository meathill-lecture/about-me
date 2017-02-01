let lesson = location.search.substr(1);

if (lesson) {
  $.ajax('../lesson' + lesson + '.md')
    .then( content => {
      let meta = content.match(/<!--([\s\S]+?)-->/m);
      let array = meta[1].split(/[\r\n]+/);
      meta = {};
      array.forEach( row => {
        if (!row) {
          return;
        }
        row = row.split(/:\s*/);
        meta[row[0]] = row[1];
      });
      $('title').text(meta.title);
      $('[name=description]').attr('content', meta.description);
    });
  $('[data-markdown]').attr('data-markdown', `../lesson${lesson}.md`);
  let script = document.createElement('script');
  script.src = '../../app/slide.js';
  document.body.appendChild(script);
}
