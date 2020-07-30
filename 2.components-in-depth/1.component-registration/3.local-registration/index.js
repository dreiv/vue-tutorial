var ComponentA = {
  template: '<p>component-a</p>'
};

var ComponentB = {
  template: '<p>component-b</p>'
};

var ComponentC = {
  template: '<p>component-c</p>'
};

var app = new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB,
    'component-c': ComponentC
  }
});
