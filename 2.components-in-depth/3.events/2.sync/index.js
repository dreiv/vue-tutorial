Vue.component('text-document', {
  props: {
    title: String
  },
  template: `
    <input
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
  `
});

var app = new Vue({
  el: '#app',
  data: {
    doc: {
      title: 'test'
    }
  }
});
