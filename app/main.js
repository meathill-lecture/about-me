/**
 * Created by meathill on 2016/12/5.
 */
if (DEBUG) {
  $.get('README.md')
    .then((response) => {
      let parts = response.split('<!-- content -->');
      $('#readme').html(marked(parts[0]));
      $('#others').html(marked(parts[1]));
    });

  $.get({
    url: 'slides/all.json',
    dataType: 'json'
  })
    .then((response) => {
      let template = Handlebars.compile($('script[type]').html());
      let html = template({lessons: response});
      $('#lessons').html(html);
    });
}


$('.email').attr('href', function (i, value) {
  return value.replace('[at]', '@');
});