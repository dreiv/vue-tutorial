var app = new Vue({
  el: '#app',
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    }
  }
});
