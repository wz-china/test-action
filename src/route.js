import Vue from "vue"
import VueRouter from "vue-router"
import home from "./page/home"
import numbers from "./page/numbers"
import skeleton from "./page/skeleton"
import echarts from "./page/echarts"
import form from "./page/form"

Vue.use(VueRouter)

let routes = [
  {
    path:"/home",
    component:home
  },
  {
    path:"/numbers",
    component:numbers
  },
  {
    path:"/skeleton",
    component:skeleton
  },
  {
    path:"/echarts",
    component:echarts
  },
  {
    path:"/form",
    component:form
  }
]

let router = new VueRouter({
  routes
})

export default router