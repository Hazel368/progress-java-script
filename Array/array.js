//Manipulasi array 

//1. Menambah isi array 
// var arr = ['a', 1, true];
// console.log(arr);


//2. Menghapus isi array 
// var arr = ["Hazel", "Mangadaralam Pratama", "Rayes"];
// arr[1] = undefined;
// console.log(arr);

//3. Menampilkan isi array 
// var arr = ["Hazel", "Ghalih", "Wildan"];

// for (var i = 0; i < arr.length; i++) {
//     console.log(`Mahasiswa ke-${i+1} : ${arr[i]}`);
// }



//Method pada array 
//1.join 

// var arr = ["Hazel", "Ghalih", "Wildan"];
// console.log(arr.join('  '));

//2. push & pop 
// var arr = ["Hazel", "Ghalih", "Wildan"];
//  arr.push('Adrian', 'Sandika', 'Satria');
// // arr.pop();
// // arr.pop();
// console.log(arr.join('  '));

//3. unshift & shift 
// var arr = ["Hazel", "Ghalih", "Wildan"];

// // arr.unshift('Deni');
// arr.shift();
// console.log(arr.join('  '));

//4. splice 
//splice(indexAwal, mauDihapuskanBerapa, elemenBaru1, elemenBaru2, ----) 
// var arr = ["Hazel", "Ghalih", "Wildan"];
// arr.splice(2, 1, 'John', 'Tugiman');
// console.log(arr.join(' '));

//5. slice 
// var arr = ["Hazel", "Ghalih", "Wildan", "Tukiyem"];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));


//6. forEach 
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Hazel", "Ghalih", "Wildan", "Tukiyem"];
// for (var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// var cetak = function (e) {
//   console.log(e);
// }
// angka.forEach(cetak);
//  nama.forEach(function (e, i) {
//     console.log(`Mahasiswa ke-${i} adalah: ${e}`);
// });

// 7. map 
// var angka = [1,2,3,4,5,6,7]
// var angka2 = angka.map(function (e){
//     return e * 2;
// });
// console.log(angka2.join (' - '));

//8. sort 
// var angka = [1,2,20,10,3,4,5,6,7];
// angka.sort(function (a , b) {
//     return a - b; 
// });
// console.log(angka.join(' - '));

//9. filter 
var angka = [1,2,3,4,5,6,7];
var angka2 = angka.filter(function (x) {
    return x > 5; 
});
console.log(angka2.join('  '));