var app = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set(newValue) {
        const [firstName, lastName, ...rest] = newValue.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
      }
    }
  }
});
