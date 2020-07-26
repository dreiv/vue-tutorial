var app = new Vue({
  el: '#app',
  data: {
    loginType: 'username'
  },
  methods: {
    toggleLogin() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
});
