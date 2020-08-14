Vue.directive('demo', (el, binding) => {
  console.log(binding.value.color); // => "white"
  console.log(binding.value.text); // => "hello!"
});

var app = new Vue({
  el: '#app',
  data: {}
});
