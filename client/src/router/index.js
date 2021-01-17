// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'

// [IMPORT] Personal //
import Index from '@/views'
import About from '@/views/about'
import Directions from '../views/directions'
import Gallery from '@/views/gallery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/directions',
    name: 'directions',
    component: Directions
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
