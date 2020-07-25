var app = new Vue({
  el: '#app',
  data: {
    a: 1
  },
  created() {
    // `this` points to the vm instance
    console.log('a is: ' + this.a);
  }
});
