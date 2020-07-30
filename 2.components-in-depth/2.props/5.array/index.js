Vue.component('array-component', {
  props: {
    commentIds: Array
  },
  template: '<h3>Comment IDs: {{ commentIds }}</h3>'
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      commentIds: [234, 266, 273]
    }
  }
});
