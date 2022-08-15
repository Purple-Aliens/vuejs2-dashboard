import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import DashboardView from '@/views/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'DashboardView',
        component: DashboardView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
