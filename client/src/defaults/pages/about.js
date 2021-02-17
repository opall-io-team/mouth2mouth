const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	title: 'About Us',
	description: 'lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	image: require('../../assets/images/pages/about/boss.jpg'),
	address: companyInfo.address,
	googleMapsLink: companyInfo.googleMapsLink,
	gMapsPlaceholder: companyInfo.googleMapsImage,
}