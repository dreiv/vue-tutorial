Vue.component('navigation-link', {
  props: {
    url: String
  },
  template: `
    <a
      :href="url"
      class="nav-link"
    >
      <slot></slot>
    </a>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'drei'
    }
  }
});
