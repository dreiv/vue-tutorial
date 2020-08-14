var mixin = {
  methods: {
    foo() {
      console.log('foo');
    },
    conflicting() {
      console.log('from mixin');
    }
  }
};

var app = new Vue({
  el: '#app',
  mixins: [mixin],
  methods: {
    bar() {
      console.log('bar');
    },
    conflicting() {
      console.log('from self');
    }
  }
});

app.foo(); // => "foo"
app.bar(); // => "bar"
app.conflicting(); // => "from self"
