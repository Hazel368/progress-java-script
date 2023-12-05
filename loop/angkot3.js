var jmlhAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
    } else {
        console.log('Angkot No.' + noAngkot + ' Tdk Beroperasi dengan baik');
    }

}