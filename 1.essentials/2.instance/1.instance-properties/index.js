var app = new Vue({
  el: '#app',
  data: {
    foo: 'bar'
  }
});

app.$watch('foo', function (newValue, oldValue) {
  console.log(`changed foo from ${oldValue} to ${newValue}`);
});
