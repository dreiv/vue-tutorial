Vue.component('TodoList', {
  props: {
    todos: { type: Array, required: true }
  },
  template: `
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <slot :todo="todo">{{ todo }}</slot>
      </li>
    </ul>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { id: 'mttvg', text: 'walk dog', isComplete: true },
      { id: 'uuivt', text: 'learn vue' },
      { id: 'y7ahg', text: 'go running' },
      { id: 'dqlip', text: 'talk to friends', isComplete: true }
    ]
  }
});
