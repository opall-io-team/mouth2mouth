const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	title: 'About Us',

	description1: 'The mouth2mouth beauty bar was created to aid women of all ages in creating their desired facial appearance.',
	
	description2: 'Our mission is to enhance your natural appearance, by substituting our client’s daily cosmetic products for our permanent cosmetic services.',
	
	description3: 'Our services create our clients desired look and save them time on applying cosmetics daily leaving no margin for error and inconsistencies',

	description4: 'Enjoy the ease of a completed cosmetic look whether it be natural or more intense.',
	
	image: require('../../assets/images/pages/about/boss.jpg'),
	
	address: companyInfo.address,
	googleMapsLink: companyInfo.googleMapsLink,
	gMapsPlaceholder: companyInfo.googleMapsImage,
}