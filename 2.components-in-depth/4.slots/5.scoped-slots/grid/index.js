Vue.component('SimpleGrid', {
  props: {
    columns: { type: Object, required: true },
    rows: { type: Array, required: true }
  },
  template: `
    <table>
      <thead>
        <tr>
          <th v-for="( column, prop ) in columns" :key="prop">
            <slot :name="'header-' + prop">
              {{ column }}
            </slot>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="( row, index ) in rows" :key="index">
          <td v-for="( _, prop ) in columns" :key="prop">
            <slot :name="'cell-' + prop" :row="row">
              {{ row[ prop ] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    cats: [
      { name: 'Tom', age: 3, image: 'tom.jpg' },
      { name: 'Felix', age: 5, image: 'felix.jpg' },
      { name: 'Sylvester', age: 7, image: 'sylvester.jpg' }
    ],
    columns: {
      name: 'Name',
      age: 'Age'
    }
  }
});
