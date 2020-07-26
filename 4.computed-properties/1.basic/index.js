var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
});
