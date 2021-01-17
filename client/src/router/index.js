// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'

// [IMPORT] Personal //
import Index from '@/views'
import About from '@/views/about'
import Gallery from '@/views/gallery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
