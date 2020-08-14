var mixin = {
  data: {
    message: 'hello',
    foo: 'abc'
  }
};

var app = new Vue({
  el: '#app',
  mixins: [mixin],
  data: {
    message: 'goodbye',
    bar: 'def'
  },
  created() {
    console.log(this.$data);
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
});
