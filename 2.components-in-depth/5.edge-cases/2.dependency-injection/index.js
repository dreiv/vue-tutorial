Vue.component('le-parrent', {
  template: `
    <div>
      <p>Focusable by provider:</p>
      <input ref="input">
      <slot />
    </div>
  `,
  provide() {
    return {
      focus: this.focus
    };
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
});

Vue.component('le-child', {
  template: `
    <span>
      calls parrent.
    </span>
  `,
  inject: ['focus'],
  mounted() {
    this.focus();
  }
});

var app = new Vue({
  el: '#app',
  data: {}
});
