//Menangkap pilihan player 
var p = prompt('Pilih : gajah,semut,orang');

//menangkap pilihan computer 
//membangkitkan bilangan random 
var comp = Math.random();

if (comp < 0.34) {
    comp = 'gajah'
    
} else if (comp >= 0.34 && comp < 0.67){
    comp = 'orang';
} else{
    comp = 'semut';
}

var hasil = '';
//menentukan rules 
if (p == comp) {
    hasil = 'SERI' ;
} else if (p == 'gajah'){
    hasil = (comp == 'orang ') ? 'MENANG!' : 'KALAH!';
    
} else if (p == 'orang'){
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut'){
    hasil = (comp == 'orang')? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Memasukkan pilihan yang salah';
}

//Tampilkan hasilnya 
alert(`Kamu Memilih : ${p} dan Komputer memilih : ${comp} \n maka hasilnya ${hasil}`);
