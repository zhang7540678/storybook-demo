import Button from './Button/index.vue'
import ElementPlus from "element-plus"
const components = [Button];

const install = (app) => {
  console.log(1122)
  app.use(ElementPlus)
  components.forEach(comp => {
    app.component(comp.name, comp);
  })
  return app
}

export { Button }
export default {
  install
}