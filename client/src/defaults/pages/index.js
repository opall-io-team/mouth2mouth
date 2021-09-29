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

			messageHTML: companyInfo.messageHTML,

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