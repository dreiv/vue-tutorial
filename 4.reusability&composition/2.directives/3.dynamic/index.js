Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed';
    var s = binding.arg;
    el.style[s] = binding.value + 'px';
  }
});

var app = new Vue({
  el: '#app',
  data: {
    direction: 'left'
  }
});
