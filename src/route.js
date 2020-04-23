import Vue from "vue"
import VueRouter from "vue-router"
import home from "./page/home"
import numbers from "./page/numbers"
import skeleton from "./page/skeleton"

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
  }
]

let router = new VueRouter({
  routes
})

export default router