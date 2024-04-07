//Membuat Object 
//Object literal 
var mhs1 = {
    nama  : 'Hazel',
    nrp : '3123500024', 
    email : 'hazelmpr@it.student.pens.ac.id', 
    prodi : 'Teknik Informatika',

};
var mhs2 = {
    nama  : 'Danur',
    nrp   : '3123500023', 
    email : 'danurisa@it.student.pens.ac.id', 
    prodi : 'Teknik Informatika',

};

//Function Declaration 
function buatObjectMahasiswa(nama,nrp, email,prodi) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.prodi = prodi;

    return mhs; 
}

var mhs3 = buatObjectMahasiswa('Wildan', '3123500017', 'wildan@it.student.pens.ac.id','Teknik Informatika' );

//Constructor 
function Mahasiswa(nama,nrp, email,prodi) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.prodi = prodi;

}
var mhs4 = new Mahasiswa('Ahmad ', '3123500025', 'achmad@it.student.pens.ac.id','Teknik Informatika' );