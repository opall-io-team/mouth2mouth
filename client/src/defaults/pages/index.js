const companyInfo = require('../companyInfo')


module.exports = {
	// Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: '',
			img: require('../../assets/images/pages/index/slide.jpg'),
		},
		{
			caption:'',
			text: '',
			img: require('../../assets/images/pages/index/slide1.jpg'),
		},
		{
			caption: '',
			text: '',
			img: 'https://images2.imgbox.com/37/5f/vuSk5jUS_o.jpg',
		},
	],

	// Main Details Company Info //
	mainDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
		text: 'By Appointments',
	},

	sliderImages: [],

	moreDetails: {
		row1: {
			image: require('../../assets/images/stars-solo.jpg'),
		},

		row2: {
			image: require('../../assets/images/pages/index/wwcdfy.jpg'),
		},
	
		row3: {
			header: 'Pamela, CEO/Founder of Balance Within',
			
			header2: 'Intuitive Empath, Light-worker and Energy Facilitator, Reiki Practitioner and Wellness Coach',

			description1: 'Hi, I\'m Pamela. Thank you for taking the time to visit my page. I\'m so excited to have this platform to share the wellness tools such as Reiki and Crystal Healing, Chakra Balancing, Sound Bowl Healing, Oracle Card Readings, Meditation and much more, that have helped me on my healing journey.',

			description2: 'I look forward to us sharing the you.',

			description3: 'Love, Light, and Many Blessings',

			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/owner.jpg'),
				},
			],
		},
	},
}