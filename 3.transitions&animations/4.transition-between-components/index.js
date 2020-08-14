var app = new Vue({
  el: '#app',
  data: {
    picked: 'v-a',
    options: ['v-a', 'v-b']
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
});
