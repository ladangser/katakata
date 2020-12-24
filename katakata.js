console.log('--Ladangser Quotes--');

// Kumpulan Quotes
const quotes = [
	
	{isi: 'Berjalanlah dan terus tertawa.',
	 pemilik: 'Nidji'},
	
	{isi: 'Sabar itu nggak ada batasnya, kalau ada batasnya berarti nggak sabar.',
	 pemilik: 'Gus Dur'},
	
	{isi: 'Memuliakan manusia berarti memuliakan penciptanya. Merendahkan manusia berarti merendahkan dan menistakan penciptanya.',
	 pemilik: 'Gus Dur'},
	
	{isi: 'Tidak apa-apa untuk merayakan kesuksesan tapi lebih penting untuk memperhatikan pelajaran tentang kegagalan.',
	 pemilik: 'Bill Gates'},
	
	{isi: 'Jangan takut untuk membuat sebuah kesalahan. Tapi pastikan Anda tidak melakukan kesalahan yang sama dua kali.',
	 pemilik: 'Akio Morita'},
	
	{isi: 'Tidak mungkin hidup tanpa gagal dalam sesuatu, kecuali jika Anda hidup dengan sangat hati-hati sehingga Anda mungkin juga tidak hidup sama sekali – dalam hal ini, Anda gagal karena kelalaian.',
	 pemilik: 'J. K. Rowling'},
	
	{isi: 'Teruslah tersenyum, karena hidup itu indah dan ada banyak hal yang bisa disyukuri.',
	 pemilik: 'Marilyn Monroe'}
	 
];


const ql = quotes.length; // mengambil jumlah index pada array quotes
const x = Math.random() * ql; // membuat angka acak dengan max sesuai panjang array quotes
const random_num = Math.floor(x); // membulatkan angka kebawah

const result = quotes[random_num]; // hasil
