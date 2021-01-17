const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	caraousel: [
		{
			caption: 'The Beauty Bar',
			text: '3 Banta Place Hackensack NJ, 07601',
			textHtml: `
				<a href="/book">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: require('../../assets/media/images/caraousel/slide2.jpg'),
		},
		{
			caption: '',
			text: '',
			textHtml: `
				<a href="/book">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: require('../../assets/media/images/caraousel/slide1.jpg'),
		},
	],

	mainDetails: {
		caption1: 'Mouth 2 Mouth',
		caption2: 'Permanent Cosmetic Studio',
		address: companyInfo.address,
	},

	moreDetails: {
		aboutUs: {
			header: 'What we do..',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			image: require('../../assets/media/images/image1.jpg'),
		},
	
		teethCleaning: {
			header: 'Teeth Whitening',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/media/images/IMG_4128.jpg'),
				},
				{
					caption: '',
					text: '',
					img: require('../../assets/media/images/IMG_5052.jpg'),
				},
			],
		},
	},
}