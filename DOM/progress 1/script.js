
//Element Manipulation 

// document.title = 'Hazel sukses'


// const body = document.body 

// body.append('Hello World ')

// const h1 = document.createElement('h1') //<h1></h1>

// h1.textContent = '<marquee> Anjay ini gua bro </marquee>' //<h1>Anjay ini gua bro</h1>

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee> Hazel Ray </marquee>'

// const namaKamu = document.createElement('b')
// namaKamu.innerText = '<marquee> Bogang </marquee>'

// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

document.title = 'Hazel sukses'
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.padding = '8px' 
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

// console.log(btn2)
 
function gantiWarna() {
    // console.log('Aman cuy')
    // alert('Aman rek')
    btn1.style.background = 'aqua'
}
function ubahText() {
    btn1.textContent = 'hihihi hahaha'
}
function oriText() {
    btn1.textContent = 'klik saya 1'
}