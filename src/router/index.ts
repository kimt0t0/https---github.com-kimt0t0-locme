import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'
import SignupView from '@/views/SignupView.vue'
import UserView from '@/views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'userform',
    component: UserView
  },
  {
    path: '/mon-compte',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path:'/inscription/:type',
    name: 'signup',
    component: SignupView
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
