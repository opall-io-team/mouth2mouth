const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	title: 'Directions',
	address: companyInfo.address,
	googleMapsLink: companyInfo.googleMapsLink,
	buttonText: 'Open Google Maps',
	gMapsPlaceholder: require('../../assets/media/gmaps-placeholder.png'),
}
