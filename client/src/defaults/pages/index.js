const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	caraousel: [
		{
			caption: 'The Beauty Bar',
			text: '3 Banta Place Hackensack NJ, 07601',
			textHtml: `
				<a href="/company-info">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: require('../../assets/media/images/pages/home/slide2.jpg'),
		},
		{
			caption: '',
			text: '',
			textHtml: `
				<a href="/company-info">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: require('../../assets/media/images/pages/home/slide1.jpg'),
		},
	],

	mainDetails: {
		caption1: 'Mouth 2 Mouth',
		caption2: 'Permanent Cosmetic Studio',
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
	},

	moreDetails: {
		row1: {
			image: require('../../assets/media/images/pages/home/blackmarble.jpg'),
		},

		row2: {
			header: 'What we can do for you!',
			text: 'lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			image: require('../../assets/media/images/pages/home/wwcdfy.jpg'),
		},
	
		row3: {
			header: 'Meet our staff!',
			text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/media/images/pages/home/meetstaff1.jpg'),
				},
				{
					caption: '',
					text: '',
					img: require('../../assets/media/images/pages/home/meetstaff2.jpg'),
				},
			],
		},

		row4: {
			image1: require('../../assets/media/images/pages/home/chair.jpg'),
			image3: require('../../assets/media/images/pages/home/front.jpg'),
		},
	},
}