var app = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName(val) {
      this.fullName = `${val} ${this.lastName}`;
    },
    lastName(val) {
      this.fullName = `${this.firstName} ${val}`;
    }
  }
});
