Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'let your memory dance' },
      {
        id: 2,
        title: 'Blogging with Vue',
        content: 'why are you so afraid of living'
      },
      {
        id: 3,
        title: 'Why Vue is so fun',
        content: 'we have two selves'
      }
    ]
  }
});
