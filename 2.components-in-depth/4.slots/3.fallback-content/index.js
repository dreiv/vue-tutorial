Vue.component('submit-button', {
  template: `
    <button type="submit">
      <slot>Submit</slot>
    </button>
  `
});

var app = new Vue({
  el: '#app'
});
