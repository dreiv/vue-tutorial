var ComponentA = {
  template: '<p>component-a</p>'
};

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  template: `
    <div>
      <p>component-b</p>
      <component-a></component-a>
    </div>
  `
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
