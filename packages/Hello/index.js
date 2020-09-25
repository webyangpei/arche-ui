import Vue from 'vue';
import Hello from './src/index.vue';

Hello.install = () => {
  Vue.component(Hello.name,Hello)
};

export default Hello;