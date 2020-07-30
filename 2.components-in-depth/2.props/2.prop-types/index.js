Vue.component('blog-post', {
  // camelCase in JavaScript
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      title: 'Criminal with a conscience',
      author: 'Dermed Skillet'
    }
  }
});
