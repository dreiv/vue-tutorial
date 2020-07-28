Vue.component('button-counter', {
  data() {
    return {
      count: 0
    };
  },
  template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>
  `
});

var app = new Vue({
  el: '#app'
});
