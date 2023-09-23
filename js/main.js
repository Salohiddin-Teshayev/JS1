let airplane = 500;
let hotel = 250;
let rotation =120;

let userName = prompt('ism kiriting');
let userMuch = prompt('qancha sarflaysiz');

let airplaneJami = 500*12168;
let hotelJami = 250*12168;
let rotationJami = 120*13005;

let umumiy =airplaneJami+hotelJami+rotationJami;
console.log('umumiy');
let elName = document.querySelector('.name');
let elCurrency = document.querySelector('.currency');

elName.textContent= userName;
if(userMuch >= umumiy) {
  elCurrency.textContent= 'oq yo`l';
}
else {
  elCurrency.textContent =' ozgina kutishiz kerak'
}