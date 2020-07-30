Vue.component('boolean-component', {
  props: {
    isPublished: Boolean
  },
  template: '<h3>isPublished: {{ isPublished }}</h3>'
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      isPublished: true
    }
  }
});
