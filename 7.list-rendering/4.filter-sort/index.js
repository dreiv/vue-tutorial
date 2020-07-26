var app = new Vue({
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5],
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ]
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    }
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    }
  }
});
