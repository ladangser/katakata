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
	 pemilik: 'Marilyn Monroe'},
	
	{isi: 'Cobalah berbuat baik saja, jangan terlalu takut memikirkan akibatnya.',
	 pemilik: 'Frans Seda'},
	
	{isi: 'Jadilah perubahan yang kamu ingin lihat di dunia ini.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Untuk percaya pada sesuatu hal, namun tidak menghidupi hal tersebut, adalah suatu ketidakjujuran.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kebahagiaan adalah segala ketika apa yang kamu pikirkan, apa yang kamu katakan, dan apa yang kamu lakukan berjalan dalam harmoni.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kamu tidak seharusnya kehilangan kepercayaan pada kemanusiaan. Kemanusiaan itu seperti lautan, jika beberapa tetes dari air laut itu kotor, lautan sendiri itu tidak akan menjadi kotor.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Tidak ada yang lebih menghabiskan waktu daripada kekhawatiran, dan orang-orang yang mengaku percaya pada Tuhan patut malu apabila mereka khawatir mengenai sesuatu hal.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Ketika ada cinta, di situlah ada kehidupan.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Satu ons dari latihan jauh lebih berharga daripada satu ton dari berbicara panjang lebar.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Aku memiliki kepercayaan bahwa aku bisa melakukan, aku akan mencapai kemampuan untuk melakukannya, meskipun pada awalnya aku tidak memiliki kapasitas tersebut.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kekuatan tidak berasal dari kemenanganmu, perjuanganmu lah yang mengembangkan kekuatanmu. Ketika kamu melewati waktu-waktu sulit dan memilih untuk tidak menyerah, itulah arti dari kekuatan.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Cara terbaik untuk menemukan dirimu adalah dengan kehilangan dirimu dalam pelayanan bagi orang lain.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Pada suatu saat, kepemimpinan berarti otot, namun pada hari ini, makna kepemimpinan adalah berbaur dengan semua orang.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Doa adalah kunci dari pagi hari, ledakan dari sore hari.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kamu mungkin tidak akan pernah tahu apa hasil dari tindakanmu, namun ketika kamu tidak bertindak apapun, maka tidak akan ada hasil yang terjadi.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kekuatan tidak berasal dari kemampuan fisik, melainkan berasal dari tekad yang gigih.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Hiduplah seakan bahwa kamu akan meninggal esok hari. Belajarlah selayaknya kamu akan hidup selamanya.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kamu dapat mengekangku, kamu dapat menyiksaku, kamu bahkan bisa menghancurkan tubuhku, namun kamu tidak akan pernah memenjarakan pikiranku.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Satu mata untuk satu mata hanya akan berakhir membuat seluruh dunia buta.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kamu tidak dapat bersalaman dengan tangan yang mengepal.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Hukum dari kasih bisa dipahami dan dipelajari dengan baik dari anak kecil.',
	 pemilik: 'Mahatma Gandhi'},
	
	{isi: 'Kemarahan adalah musuh dari kedamaian dan kebanggaan adalah monster yang akan menelannya.',
	 pemilik: 'Mahatma Gandhi'}
	
];


const ql = quotes.length; // mengambil jumlah index pada array quotes
const x = Math.random() * ql; // membuat angka acak dengan max sesuai panjang array quotes
const random_num = Math.floor(x); // membulatkan angka kebawah

const result = quotes[random_num]; // hasil
