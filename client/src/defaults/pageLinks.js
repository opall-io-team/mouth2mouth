// [REQUIRE] //
//const feather = require('feather-icons')


// [EXPORT] //
module.exports = [
	{
		path: '/',
		text: 'Welcome',
		children: [],
	},
	{
		path: '/services',
		text: 'Therapies',
		children: [
			{
				path: '/services/reiki',
				text: 'Services',
			},
		],
	},
	/*
	{
		path: '/menu',
		text: 'Menu',
		children: [],
	},
	*/
	{
		path: '/about',
		text: 'About',
		children: [],
	},
	/*
	{
		path: '/directions',
		text: 'Directions',
		children: [],
	},
	*/
	{
		path: '/contact',
		text: 'Contact',
		children: [],
	},
	/*
	{
		path: '/gallery',
		text: 'Gallery',
		children: [],
		
	},
	*/
	{
		path: '/faq',
		text: 'FAQ',
		children: [],
	},
	{
		path: '/blog',
		text: 'Blog',
		children: [],
	},
]