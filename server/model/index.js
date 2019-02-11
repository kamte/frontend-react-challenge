const {commerce, image, lorem} = require('faker');

const times = (n, f) => {
	return Array.from({length: n}).map((_, i) => f(i));
} 

const createPhone = (id) => ({
	id,
	title: commerce.productName(),
	description: lorem.paragraph(),
	img: image.imageUrl(640, 480, 'technics', true),
	color: commerce.color(),
	price: commerce.price(),
});

module.exports = times(20, createPhone);

