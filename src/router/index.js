import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue"
import ToolsView from "../views/ToolsView.vue"
import MedicamentsView from '../views/MedicamentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tools',
    name: 'tools',
    component: ToolsView
  },
  {
    path: '/medicaments',
    name: 'medicaments',
    component: MedicamentsView
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
