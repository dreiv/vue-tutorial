Vue.component('current-user', {
  template: `
    <div>
      <h1>Current User</h1>
      <slot :user="user">
        {{ user.lastName }}
      </slot>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    user: {
      firstName: 'andrei',
      lastName: 'voicu'
    }
  }
});
