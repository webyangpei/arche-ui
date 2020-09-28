import Button from './button';
import Table from './table';
import TableColumn from './table-column';
import Transfer from './transfer';
import Input from './input'

const components = {
  Button,
  Table,
  TableColumn,
  Input,
  Transfer
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
  Button,
  Table,
  TableColumn,
  Input,
  Transfer
}