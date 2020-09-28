import Vue from 'vue';
import Button from './src/button.vue';

Button.install = () => {
  Vue.component(Button.name,Button)
};

export default Button;