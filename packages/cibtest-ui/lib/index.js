import 'element-plus/dist/index.css'
import Button from './Button/index.vue'
const components = [Button];

const install = (app) => {
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