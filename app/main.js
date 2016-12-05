/**
 * Created by meathill on 2016/12/5.
 */
$.get('README.md')
  .then(function (response) {
    $('#content article').html(marked(response));
  });

$('.email').attr('href', function (i, value) {
  return value.replace('[at]', '@');
});