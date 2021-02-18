const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	title: 'About Us',
	description: 'The Mouth2Mouth Beauty Bar offers Bergen County’s most luxurious permanent makeup and spa services. Our permanent cosmetic studio offers eye, lip and brow procedures to enhance your natural appearance by substituting your daily makeup routine with our longer lasting permanent makeup services. In addition to our permanent makeup services, we offer clients a vast array of luxury facials, eyelash extensions, makeup services and dental grade teeth whitening procedure. We also offer training courses for eyelash extensions, makeup application and teeth whitening treatments with live interactive instruction in group or one on one sessions.',
	image: require('../../assets/images/pages/about/boss.jpg'),
	address: companyInfo.address,
	googleMapsLink: companyInfo.googleMapsLink,
	gMapsPlaceholder: companyInfo.googleMapsImage,
}