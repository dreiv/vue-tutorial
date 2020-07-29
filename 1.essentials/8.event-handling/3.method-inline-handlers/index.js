var app = new Vue({
  el: '#app',
  methods: {
    say(message) {
      alert(message);
    },
    warn: function (message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    }
  }
});
