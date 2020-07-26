var app = new Vue({
  el: '#app',
  data: {
    classObject: {
      isActive: false,
      hasError: false
    }
  },
  methods: {
    toggleActive() {
      this.classObject = {
        ...this.classObject,
        isActive: !this.classObject.isActive
      };
    },
    toggleError() {
      this.classObject = {
        ...this.classObject,
        hasError: !this.classObject.hasError
      };
    }
  }
});
