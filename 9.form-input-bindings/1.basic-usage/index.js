var app = new Vue({
  el: '#app',
  data: {
    message: '',
    multilineMessage: '',
    checked: false,
    checkedNames: [
      {
        name: 'Jack',
        checked: false
      },
      {
        name: 'John',
        checked: false
      },
      {
        name: 'Mike',
        checked: false
      }
    ],
    radioOptions: ['One', 'Two', 'Three'],
    picked: null,
    selectOptions: ['A', 'B', 'C'],
    selected: null,
    selectedMult: null
  }
});
