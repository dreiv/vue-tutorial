// define a mixin object
var myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    }
  }
};

var Component = Vue.extend({
  mixins: [myMixin]
});

var component = new Component();

var app = new Vue({
  el: '#app',
  data: {}
});
