Vue.component('blog-post', {
  props: {
    id: Number,
    title: String
  },
  template: `
    <div>
      {{ id }}. {{ title }}
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      id: 1,
      title: 'My Journey with Vue'
    }
  }
});
