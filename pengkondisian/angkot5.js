var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot<= jmlAngkot; noAngkot++){
    if (noAngkot<=angkotBeroperasi && noAngkot != 5) {
        console.log('Angkot No.' + noAngkot + ' Beroperasi dengan baik' );
    } else {
        if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
            console.log('Angkot No.' + noAngkot + ' lagi lembur ygy');
        } else {
            console.log('Angkot No.' + noAngkot + ' sedang tidak beroperasi ygy');
            
        }
        
    }

}