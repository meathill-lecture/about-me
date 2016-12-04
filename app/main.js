/**
 * Created by meathill on 2016/12/5.
 */
$.get('README.md')
  .then(function (response) {
    $('#content').html(marked(response));
  });