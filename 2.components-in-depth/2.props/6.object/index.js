Vue.component('object-component', {
  props: {
    author: {
      name: String,
      company: String
    }
  },
  template: `
    <div>
      <h3>Author: {{ author.name }}</h3>
      <p>{{ author.company }}</p>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    post: {
      author: {
        name: 'Veronica',
        company: 'Veridian Dynamics'
      }
    }
  }
});
