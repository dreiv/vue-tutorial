// kebab-case
Vue.component('my-component', {
  template: '<p>this is my component</p>'
});

// PascalCase
Vue.component('MyComponentName', {
  template: '<p>this is my other component</p>'
});

var app = new Vue({
  el: '#app',
  data: {}
});
