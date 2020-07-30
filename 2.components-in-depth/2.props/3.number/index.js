Vue.component('number-component', {
  props: {
    likes: Number
  },
  template: '<h3>likes: {{ likes }}</h3>'
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      likes: 42
    }
  }
});
