const quotes = [
	'Ini adalah jalan ninjaku (Uzumaki Naruto)',
	'Berjalanlah dan terus tertawa (Nidji)',
];


const ql = quotes.length;
const x = Math.random() * ql;
const random_num = Math.floor(x);

// console.log(Math.floor(x));
// console.log(quotes.length);

console.log(quotes[random_num]);