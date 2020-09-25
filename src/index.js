import Vue from 'vue';
import App from './App.vue';
import archeUI from '../package/arche-ui';
Vue.use(archeUI)

new Vue({
  render: h=> h(App)
}).$mount('#app');