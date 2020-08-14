var mixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    }
  }
};

Vue.component('with-mixin', {
  mixins: [mixin],
  template: `
    <p>has mixin</p>
  `
});

var app = new Vue({
  el: '#app'
});
