import Vue from "vue"
import App from "./app"
import router from "./route"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import D2Crud from '@d2-projects/d2-crud'
import D2Crud from '../table/dist/d2-crud'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(D2Crud)

let bus = new Vue()
Vue.prototype.bus = bus


new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
