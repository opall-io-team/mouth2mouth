// [REQUIRE] //
const feather = require('feather-icons')


// [EXPORT] //
module.exports = [
	{
		path: '/',
		type:'home',
		text: '',
		navIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 16,
			height: 16,
			'class': ''
		}),
		slideMenuIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 34,
			height: 34,
			'class': 'my-2'
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