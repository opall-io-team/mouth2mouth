// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import Index from '@/pages'
import About from '@/pages/about'
import Book from '@/pages/book'
import CompanyInfo from "@/pages/contact-us"
import Directions from '@/pages/directions'
import Gallery from '@/pages/gallery'
import Services from '@/pages/services'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '/',
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
			path: '/contact-us',
			name: 'contact-us',
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
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
})

export default router
