Vue.filter('capitalize', (value) => {
  if (!value) return '';
  value = value.toString();

  return value.charAt(0).toUpperCase() + value.slice(1);
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello world!'
  }
});
