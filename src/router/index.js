import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import PacksView from '@/views/PacksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'HomeView',
        component: HomeView
      },

      {
        path: '/packages',
        name: 'PacksView',
        component: PacksView,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
