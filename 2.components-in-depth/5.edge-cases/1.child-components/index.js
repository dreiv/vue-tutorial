Vue.component('BaseInput', {
  template: `
    <input ref="input">
  `,
  mounted() {
    this.$refs.input.focus();
  }
});

var app = new Vue({
  el: '#app'
});
