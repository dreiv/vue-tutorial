var mixin = {
  created() {
    console.log('mixin hook called');
  }
};

var app = new Vue({
  el: '#app',
  mixins: [mixin],
  created: function () {
    console.log('component hook called');
  }
});

// => "mixin hook called"
// => "component hook called"
