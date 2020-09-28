import Vue from 'vue';
import App from './App.vue';
// import archeUI from '../lib/arche-ui';
import archeUI from '../packages';
import '../packages/theme-chalk/src/index.scss'
Vue.use(archeUI)

new Vue({
  render: h=> h(App)
}).$mount('#app');