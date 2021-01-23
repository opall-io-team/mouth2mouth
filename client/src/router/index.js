// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'

// [IMPORT] Personal //
import Index from '@/views'
import About from '@/views/about'
import Book from '@/views/book'
import CompanyInfo from "@/views/company-info"
import Directions from '@/views/directions'
import Gallery from '@/views/gallery'
import Services from '@/views/services'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Index,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/book',
		name: 'book',
		component: Book,
	},
	{
		path: '/company-info',
		name: 'company-info',
		component: CompanyInfo,
	},
	{
		path: '/directions',
		name: 'directions',
		component: Directions,
	},
	{
		path: '/gallery',
		name: 'gallery',
		component: Gallery,
	},
	{
		path: '/services',
		name: 'services',
		component: Services,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
