console.log('--Ladangser Quotes--');

const quotes = [
	{isi: 'Ini adalah jalan ninjaku',
	 pemilik: 'Nartoh'},
	
	{isi: 'Berjalanlah dan terus tertawa',
	 pemilik: 'Nidji'}
];


const ql = quotes.length; // mengambil jumlah index pada array quotes
const x = Math.random() * ql; // membuat angka acak dengan max sesuai panjang array quotes
const random_num = Math.floor(x); // membulatkan angka kebawah

const result = quotes[random_num]; // hasil
