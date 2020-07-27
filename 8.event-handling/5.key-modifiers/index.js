var app = new Vue({
  el: '#app',
  methods: {
    doSomething() {
      console.log('Doing something...');
    },
    submit(event) {
      if (event) {
        alert(event.target.value);
      }
    }
  }
});
