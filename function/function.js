function jumlahVolumeAB(a , b) {
    var volumeA;
    var volumeB;
    var total;


    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
    
}
document.writeln (jumlahVolumeAB(10, 5));
alert(jumlahVolumeAB(25, 20));
