import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mon-compte',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/a-propos',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
