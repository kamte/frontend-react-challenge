
let __id__ = 0;
const generateId = () => {
	return __id__++;
} 

const mockData = [
	{
		id: generateId(),
		title: 'iPhone Xs',
		description: 'Largest Super Retina display. Fastest performance with A12 Bionic. Most secure facial authentication with Face ID. ',
		img: '',
		color: 'Space grey',
		price: '889',
	},
	{
		id: generateId(),
		title: 'iPhone Xr',
		description: 'All-screen design. Longest battery life ever in an iPhone.',
		img: '',
		color: 'Pearl white',
		price: '589',
	},
	{
		id: generateId(),
		title: 'Samsung Galaxy S9',
		description: 'The revolutionary camera that adapts like the human eye.',
		img: '',
		color: 'Coral Blue',
		price: '519,99',
	},
];

module.exports = mockData;