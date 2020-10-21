import Vue from 'vue'
import VueRouter from 'vue-router'
import TotalInfo from "../components/TotalInfo";
import MapWrapper from "../components/MapWrapper";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MapWrapper',
    component: MapWrapper
  },
  {
    path: '/info',
    name: 'TotalInfo',
    component: TotalInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
