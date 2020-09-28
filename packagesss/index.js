import Button from './button';

const components = {
  Button
}


const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}