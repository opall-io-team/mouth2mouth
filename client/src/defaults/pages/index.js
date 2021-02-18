const companyInfo = require('../companyInfo')

const slideHTML = `
	<h1 class="d-none d-md-block font-weight-bold text-info">
		${companyInfo.companyCaption2}
	</h1>

	<a href="/about">
		<button class="d-none d-sm-block m-auto btn-lg btn-primary">
			Book Apointment
		</button>

		<button class="d-block d-sm-none m-auto btn btn-primary">
			Book Apointment
		</button>
	</a>
`

// [EXPORT] //
module.exports = {
	// Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: '',
			textHtml: slideHTML,
			img: require('../../assets/images/pages/index/slide1.jpg'),
		},
		{
			caption: '',
			text: '',
			textHtml: slideHTML,
			img: require('../../assets/images/pages/index/slide2.jpg'),
		},
		{
			caption: '',
			text: '',
			textHtml: slideHTML,
			img: require('../../assets/images/pages/index/slide3.jpg'),
		},
		{
			caption: '',
			text: '',
			textHtml: slideHTML,
			img: require('../../assets/images/pages/index/slide4.jpg'),
		},
	],

	// Main Details Company Info //
	mainDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
	},

	moreDetails: {
		row1: {
			image: require('../../assets/images/pages/index/blackmarble.jpg'),
		},

		row2: {
			header: 'What we can do for you!',
			text: 'The Mouth2Mouth Beauty Bar offers Bergen County’s most luxurious permanent makeup and spa services. Our permanent cosmetic studio offers eye, lip and brow procedures to enhance your natural appearance by substituting your daily makeup routine with our longer lasting permanent makeup services. In addition to our permanent makeup services, we offer clients a vast array of luxury facials, eyelash extensions, makeup services and dental grade teeth whitening procedure. We also offer training courses for eyelash extensions, makeup application and teeth whitening treatments with live interactive instruction in group or one on one sessions.  ',
			image: require('../../assets/images/pages/index/wwcdfy.jpg'),
		},
	
		row3: {
			header: 'Meet our staff!',
			
			description1: 'Our owner and permanent makeup artist and teeth whitening specialist, Rachel Furman opened the Mouth2Mouth Beauty Bar in March 2020. She is the mother of a beautiful 5-year-old girl Quincy Marie and is a Temple University Fox School of Business Alumni. She is 3x certified and is a DAAM (American Association of Micropigmentation).',

			description2: 'Our spa’s aesthetician Nia Rosario provides all our client’s luxury facials, makeup services and eyelash extensions. She is the mother of 3 beautiful daughters Ava, Leila and Chanel and was trained at Parisian Beauty School. She has also worked with numerous celebrities and worked for New York Fashion Week.  ',

			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/meetstaff1.jpg'),
				},
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/meetstaff2.jpg'),
				},
			],
		},

		row4: {
			image1: require('../../assets/images/pages/index/chair.jpg'),
			image3: require('../../assets/images/pages/index/front.jpg'),
		},
	},
}