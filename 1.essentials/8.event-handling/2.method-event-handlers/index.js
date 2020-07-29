var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet(event) {
      alert(`Hello ${this.name}!`);

      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});
