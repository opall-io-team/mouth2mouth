// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '@/pages'
import about from '@/pages/about'
import book from '@/pages/book'
import contactUs from "@/pages/contact-us"
import directions from '@/pages/directions'
import faq from '@/pages/faq'
import gallery from '@/pages/gallery'
import ourTeam from '@/pages/our-team'
import payment from '@/pages/payment'
import services from '@/pages/services'
import NotFound from '@/pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '/',
			component: index,
		},
		{
			path: '/about',
			name: 'about',
			component: about,
		},
		{
			path: '/book',
			name: 'book',
			component: book,
		},
		{
			path: '/contact-us',
			name: 'contact-us',
			component: contactUs,
		},
		{
			path: '/directions',
			name: 'directions',
			component: directions,
		},
		{
			path: '/faq',
			name: 'faq',
			component: faq,
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
		},
		{
			path: '/our-team',
			name: 'our-team',
			component: ourTeam,
		},
		{
			path: '/payment',
			name: 'payment',
			component: payment,
		},
		{
			path: '/services',
			name: 'services',
			component: services,
		},
		// Not-Found //
		{
			path: '/**',
			name: 'not_found',
			component: NotFound,
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})

export default router
