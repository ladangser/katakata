console.log('-- Quotes Acak Ladangser --');

const quotes = [
	{isi: 'Ini adalah jalan ninjaku',
	 pemilik: 'Nartoh'},
	
	{isi: 'Berjalanlah dan terus tertawa',
	 pemilik: 'Nidji'}
];


const ql = quotes.length; // mengambil jumlah index pada array quotes
const x = Math.random() * ql; // membuat angka acak dengan max sesuai panjang array quotes
const random_num = Math.floor(x); // membulatkan angka kebawah

function katakata() {
	console.log(quotes[random_num]); // menampilkan hasil
}
