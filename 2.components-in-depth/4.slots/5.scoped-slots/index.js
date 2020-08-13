Vue.component('SimpleList', {
  props: {
    items: { type: Array, required: true }
  },
  template: `
    <ul>
      <li v-for="( item, index ) in items" :key="index">
        <slot :item="item">{{ item }}</slot>
      </li>
    </ul>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    cats: [
      { name: 'Tom', age: 3 },
      { name: 'Felix', age: 5 },
      { name: 'Sylvester', age: 7 }
    ]
  }
});
