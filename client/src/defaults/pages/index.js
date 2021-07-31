const companyInfo = require('../companyInfo')

// [EXPORT] //
module.exports = {
	// Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: '',
			img: require('../../assets/images/pages/index/slide1.jpg'),
		},
		{
			caption: '',
			text: '',
			img: require('../../assets/images/pages/index/slide2.jpg'),
		},
	],

	// Main Details Company Info //
	mainDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
		text: 'By the hour, apointments only',
	},

	sliderImages: [
		require('../../assets/images/pages/index/slider/1.jpg'),
		require('../../assets/images/pages/index/slider/2.jpg'),
		require('../../assets/images/pages/index/slider/3.jpg'),
		require('../../assets/images/pages/index/slider/4.jpg'),
		require('../../assets/images/pages/index/slider/5.jpg'),
		require('../../assets/images/pages/index/slider/6.jpg'),
		require('../../assets/images/pages/index/slider/7.jpg'),
		require('../../assets/images/pages/index/slider/8.jpg'),
	],

	moreDetails: {
		row1: {
			image: require('../../assets/images/pages/index/blackmarble.jpg'),
		},

		row2: {
			header: 'What We Can Offer You',
			text: '',
			image: require('../../assets/images/pages/index/wwcdfy.jpg'),
		},
	
		row3: {
			header: 'Meet our staff',
			
			description1: '',

			description2: '',

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