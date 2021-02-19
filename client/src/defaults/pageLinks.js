const feather = require('feather-icons')

// [EXPORT] //
module.exports = [
	{
		path: '/',
		type:'home',
		text: '',
		navIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 20,
			height: 20,
			'class': ''
		}),
		slideMenuIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 38,
			height: 38,
			'class': 'my-3'
		}),
	},
	{
		path: '/services',
		type: 'services',
		text: 'Services',
	},
	{
		path: '/faq',
		type: 'faq',
		text: 'FAQ',
	},
	{
		path: '/our-team',
		type: 'our-team',
		text: 'Our Team',
	},
	{
		path: '/about',
		type: 'about',
		text: 'About Us',
	},
	{
		path: '/gallery',
		type: 'gallery',
		text: 'Gallery',
	},
	{
		path: '/directions',
		type: 'directions',
		text: 'Directions',
	},
]