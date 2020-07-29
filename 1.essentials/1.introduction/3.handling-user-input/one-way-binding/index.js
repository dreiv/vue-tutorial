var app = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
