"use strict";


//////////////////  Shallow Copy
let a = 1 
let b = a
b = 2
console.log(a);
console.log(b);


//////////////////  Deep Copy
// spread operator - to'liq ma'lumotni nusxalash
const person = {
    name: 'ali',
    age: 21,
}
//////////////////// spread operator
const newPerson = {...person}

newPerson.name = 'vali'
newPerson.age = 22

console.log(person);
console.log(newPerson);

// chap tomonda kelsa bu rest operator qolgan ma'lumotni nusxalash
const [bir, ...ok] = [1, 2, 3]
console.log(ok);



// const now = new Date()

// const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
// const month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth() + 1
// const year = now.getFullYear() < 10 ? '0' + now.getFullYear() : now.getFullYear()
// console.log(`${today}, ${month}, ${year}`);

// const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
// const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
// const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
// const milliSecond = now.getMilliseconds() < 10 ? '0' + now.getMilliseconds() : now.getMilliseconds()
// console.log(`${hour}:${minute}:${second}:${milliSecond}`);



//////////////////////// JavaScript destructuring
// const [olma, gilos, ...boshqaMevalar] = ['olma🍎', 'gilos🍒', 'uzum🍇', 'nok🍐']
// ///////////////////  → rest operation =>  destructuring qolgan ma'lumotni birlashtirib beradi.

// console.log(olma, gilos, boshqaMevalar)



// // const { name, age, job, from = 'Uzbekiston' } = {
// //     name: 'Olim',
// //     age: 20,
// //     job: 'developer'
// // }

// // console.log(name, age, job, from);

// const { name, ...qolganMalumotlar } = {
//     name: 'Olim',
//     age: 20,
//     job: 'developer'
// }

// console.log(name, qolganMalumotlar);






// const changeNum = document.querySelector('.num')
// const startBtn = document.getElementById('btn-start')
// const stopBtn = document.getElementById('btn-stop')

// let num = 1
// let interval
// startBtn.addEventListener('click', () => {
//     if(num === 1) {
//         changeNum.style.color = 'green'
//         interval = setInterval(() => {
//             changeNum.innerHTML = Number(changeNum.innerHTML) + 1
//         }, 1000);
//     }
// })

// num = 0

// stopBtn.addEventListener('click', () => {
//     changeNum.style.color = 'red'
//     clearInterval(interval)
//     num = 1
// })

////////////////////////////// setTimeOut
// function sa() {
//     console.log('World')
// }    

// setTimeout(sa , 3000)

// setTimeout(() => {
//     console.log('Salom ')
// }, 3000)


////////////////////////////// setInterval
// let a = 0

//     const timerInterval = setInterval(() => {
//         a++
//         console.log(a);
//     }, 1000);    


// setTimeout(() => {
//     clearInterval(timerInterval)
// }, 10000)





/////////////////////////////  LOCAL STORAGE

// const names = ['beko', 'deko', 'geko']
// // setItem
// localStorage.setItem('name', JSON.stringify(names))

// // getItem
// const getName = JSON.parse(localStorage.getItem('name'))
// console.log(getName);

// clear
// localStorage.clear()




// const age = prompt("Yoshingizni kiriting: ", 18);

// age <= 18 ? alert("siz 18 yoshdan kattasiz!") : alert("siz 18 yoshdan dan kichik siz!")


// const movies = [
//     {name: 'Titanik 4D', year: 1997, rating: 7},
//     {name: 'Forsaj 3D', year: 2020, rating: 5},
//     {name: 'Avatar', year: 2008, rating: 9},
//     {name: 'Avengers', year: 2012, rating: 6},
// ]

// const sortedMovies = movies.sort((a, b) => {
//     return b.rating - a.rating
// })

// console.log(sortedMovies);

// const names = ['sardor', 'abror', 'bobur', 'jamshid']
// const numbers = [2, 1, 21, 11, 0, -5, 3]

// const sortName = names.sort()
// // console.log(sortName)

// const sortNumbers = numbers.sort((a, b) => {
//     return a - b
// })
// console.log(sortNumbers);

// const mapMovies = movies.map((movie) => {
//     return {name: movie.name, year: movie.year, rating: movie.rating + 1}
// })

// console.log(mapMovies);

// const filterMovies = movies.filter((movie) => {
//     return movie.rating
// })
// console.log(filterMovies);

// let yearMovies = ''
// movies.forEach((movie) => {
//     if (movie.year >= 2010) {
//         yearMovies += movie.name + ' '
//     }
// })
// console.log(`2010-yildan keyin chiqarilgan filmlar ${yearMovies}`);

// const body = document.querySelector('body')
// const container = document.querySelector('.container')
// const colorText = document.querySelector('.color-text')

// const value = [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
// ]

// //random color function
// function getGradient() {
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         const randomNumber = Math.trunc(Math.random() * value.length)
//         color +=value[randomNumber]
//     }

//     return color
// }

// function setGradient() {
//     const color1 = getGradient()
//     const color2 = getGradient()
//     const randomDeg = Math.trunc(Math.random() * 360)
//     const bgColor = `
//     linear-gradient(
//         ${randomDeg}deg,
//         ${color1},
//         ${color2}
//     )`
//     body.style.background = bgColor
//     colorText.textContent = bgColor
// }

// setGradient()

// container.addEventListener('click', setGradient)

// const insert = document.getElementById('insert')

// window.addEventListener('keydown', e => {
//     insert.innerHTML = `

//     <div class="key">
//         ${e.key == ' ' ? "Space" : e.key}
//         <small>event.key</small>
//     </div>

//     <div class="key">
//         ${e.keyCode}
//         <small>event.keyCode</small>
//     </div>

//     <div class="key">
//         ${e.code}
//         <small>event.code</small>
//     </div>

//     `
// })

// const showBtn = document.getElementById('show-btn');
// const modal = document.getElementById('modal');
// const overlay = document.getElementById('overlay');
// const modalCloseBtn = document.getElementById('modal-close-btn');

// // add classList hidden
// const addHidden = () => {
//   modal.classList.add('hidden')
//   overlay.classList.add('hidden')
// }

// // remove classList hidden
// const removeHidden = () => {
//   modal.classList.remove('hidden')
//   overlay.classList.remove('hidden')
// }

// showBtn.addEventListener('click', removeHidden)
// modalCloseBtn.addEventListener('click', addHidden)
// overlay.addEventListener('click', addHidden)
// document.addEventListener('keydown', (e) => {
//   if(e.key == "Escape") {
//     addHidden()
//   }
// })

// const p = document.querySelectorAll('p');
// const btn = document.querySelector('button')

// p.forEach((text) => {
//   text.addEventListener('click', () => {
//     text.classList.add('remove')
//   })
// })

// btn.addEventListener('click', () => {
//   p.forEach((text) => {
//     text.classList.add('add')
//   })
// })

///////// Tub Sonni Topish
// let val = 20;

// for(let currentInt = 1; currentInt <= val; currentInt++) {
//   let isPrime = true;

//   for(let i = 2; i < currentInt; i++) {
//     if(currentInt % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if(isPrime) {
//     console.log(currentInt);
//   }
// }

// const num = 50;
// let result = [];

// const fizzBuzz = () => {
//   for(let i = 1; i <= num; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//       result.push('fizzbuzz');
//     } else if (i % 3 == 0) {
//       result.push('fizz');
//     } else if (i % 5 == 0) {
//       result.push('buzz');
//     } else {
//       result.push(i);
//     }
//   }
// }

// fizzBuzz(num);
// console.log(result);

// let num = +prompt('Son kiriting: ');
// let newNum = [];

// console.log(`Siz kiritgan son ${num} `)
// for(let i = 1; i <= 10; i++) {
//   newNum.push(num * i + 1);
// }

// console.log(newNum);

// const num = [1, 2, 3, 4, 5];
// let newNum = [];

// num.forEach((item, index) => {
//   newNum.push(item + index);
// })

// console.log(newNum)

// const word = 'Salom';
// console.log(word.lastIndexOf(word.slice(-1)) +1);

// const text = prompt(`So'z kiriting: `)
// let spliteWord = text.split('');
// let num = 0;

// spliteWord.forEach((word) => {
//   if(word == 'a' || word == 'A') {
//     num++;
//   }
// })

// console.log(num);

// const value = prompt('Hohlagan narsangizni kiriting: ');
// const res = '';

// if(value.)

// console.log(res);

// const word = 'xorazm';

// const res = word.split('');
// let newWord = '';

// for(let i = word.length - 1; i >= 0; i--) {
//   newWord += res[i];
// }

// console.log(newWord);

// alert('salom');

// const value = prompt('Hohlagan narsangizni kiriting: ');

// let res = value.split('').reverse().join('');

// console.log(res);

// const checkData = [null, undefined, 'false', true, 99, 0, false, '', NaN, '0'];
// const newData = [];

// checkData.forEach((item) => {
//   if(!item) {
//     newData.push(item);
//   }
// })

// console.log(newData);

// const data = [[1, 2, 3], 'qizil', 'oq', [4, 5, 6], false, true];
// const newData = [];

// data.forEach((item) => {
//   const res = Array.isArray(item);

//   if(res) {
//     item.forEach((num) => {
//       newData.push(num);
//     })
//   }
// });

// console.log(newData);

// Bu forEach method ni ichida callbackFunction ishlatish usuli!!!!!!!!!
// const ismlar = ['sarvar', 'kamron', 'sanjar'];
// const newIsmlar = [];

// forEach method da ikkita parametr beriladi, ikkinchisi indeks bu hohlasangiz berasiz ko'pincha berilmidi!!!!!!!!!!!!!!
// ismlar.forEach(function(ism, i) {
// const newIsm = ism.charAt().toUpperCase() + ism.slice(1) + 'bek';
//   newIsmlar.push(newIsm);
// })

// console.log(newIsmlar);

// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 1000);

// btn.onclick = function () {
// 	container.style.transform = "rotate(" + number + "deg)";
// 	number += Math.ceil(Math.random() * 1000);
// }

// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const generate = () => {
//   const minEl = document.getElementById('min');
//   const maxEl = document.getElementById('max');
//   const min = Number(minEl.value);
//   const max = Number(maxEl.value);

//   if(minEl.value === '' || maxEl.value === '') {
//     alert("Iltimos min va max qiymatlarini kiriting!")
//     return;
//   }

//   if(min > max) {
//     alert("Min va maxdan katta bo'lmasligi kerak!");
//     return;
//   }

//   const placeholderEl = document.querySelector('#placeholder');
//   placeholderEl.textContent = getRandomNumber(min, max);
// }

// const btnEl = document.getElementById('generate');
// btnEl.addEventListener('click', generate);

// const reverseArrow = number => {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }

// console.log(reverseArrow(71));

// const big = (number1, number2) => {
//     if(number1 > number2) {
//         console.log(`${number1} is big`);
//     } else {
//         console.log(`${number2} is big`);
//     }
// }

// big(3, 4);

////////// FUNCTION ARROW/////////
// const evenOrOddDec = number => {
//     if(number % 2 == 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(7);

////////// FUNCTION EXPRESSION/////////

// const evenOrOddDec = function(number) {
//     if(number % 2 == 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(8);

////////// FUNCTION DECLARATION/////////
// function evenOrOddDec(number) {
//     if(number % 2 == 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(7);

// const a = {
//     jacket: "black",
//     height: "1.7",
//     colors: {
//         hair: "black",
//         style: "curley"
//     },
//     howOut: function() {
//         console.log("Fast with help door");
//     }
// }
// a.howOut();

// for(let key in a) {
//     console.log(`${key} = ${a[key]}`);

// const {hair, style} = a.colors;////////////////////////////////////////////////////////////////

// console.log(hair);
// console.log(style);

// console.log(a.colors);
// console.log(Object.keys(a));
// console.log(Object.keys(a.colors));

// function first(cb) {
//     setTimeout(() => {
//         console.log("1");
//         cb();
//     }, 1000);
// }

// function second() {
//     console.log("2");
// }

// first(second);

// let numberOfSeries;
// function startApp() {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '');

//     while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
//         numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '');
//     }
// }

// startApp();

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// }

// function rememberSeries() {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
//         const b = prompt('Necha baxo berasiz', '')

//         if(a != null && b != null && a != "" && b != "") {
//             seriesDB.series[a] = b
//             console.log("done")
//         } else {
//             console.log("error");
//             i--;
//         }
//     }
// }

// rememberSeries();

// function detectLevelSeries() {
//     if(seriesDB.count < 5) {
//         console.log("Kam serial ko'ribsiz!");
//     } else if(seriesDB.count >= 5 && seriesDB.count < 10) {
//         console.log("Siz norm serialchi ekansiz!");
//     } else if(seriesDB.count >= 10) {
//         console.log("Siz serialchi zvezda ekansiz!");
//     } else {
//         console.log("Error");
//     }
// }

// detectLevelSeries();

// function showDB() {
//     if(!seriesDB.private) {
//         console.log(seriesDB);
//     }
// }

// showDB();

// function writeGenres() {
//     for(let i = 0; i < 3; i++) {
//         const ab = prompt(`${i + 1} - Yaxshi ko'rgan janringiz?`, '');

//         if(ab != null && ab != "") {
//             seriesDB.genres[i] = ab;
//             console.log("mission passed");
//         } else {
//             console.log("mission failed");
//             i--;
//         }
//     }
// }

// writeGenres();

// for(let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
//     const b = prompt('Necha baxo berasiz', '')

//     if(a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b
//         console.log("done")
//     } else {
//         console.log("error");
//         i--;
//     }
// }

// if(seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz!");
// } else if(seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz norm serialchi ekansiz!");
// } else if(seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz!");
// } else {
//     console.log("Error");
// }

// const num = "14.2px";
// console.log(parseInt(num)); // "14"

// const num = 7.6;
// console.log(Math.round(num));//"8"

// const user = "Hello team!";

// console.log(user.indexOf('z'));
// console.log(user.slice(0, 10));
// console.log(user.substring(0, 10));

// const calc = (a) => {
//     console.log("!");
//     return a;
// };
// console.log(calc());

// const sim = function() {
//     console.log("Hello world!");
// }
// sim();

// function sim (a, b) {
//     return a + b;
// }

// console.log(sim(10, 5));

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// }

// for(let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
//     const b = prompt('Necha baxo berasiz', '')

//     if(a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b
//         console.log("done")
//     } else {
//         console.log("error");
//         i--;
//     }

// }

// if(seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz!");
// } else if(seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz norm serialchi ekansiz!");
// } else if(seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz!");
// } else {
//     console.log("Error");
// }

// console.log(seriesDB)

// let number = 100;
// const num = 100;

// const isNotMassiv = {
//     age: 10,
//     clientName: "John",
//     surName: "Jonathan",
//     address: "Johnston street",
//     phoneNumber: 929192911
// };

// console.log(isNotMassiv);

// const isMassiv = [10, "John", "Jonathan", "Johnston street", 929192911];

// console.log(isMassiv);

// alert("Are you ?");

// const place = confirm("Are you muslim?");
// console.log(place);

// const currentPlace = +prompt("Where are you?", "");
// console.log(typeof currentPlace + 10);

// const channel = prompt("what's your favourite channel?");
// console.log(`https://youtube.com/${channel}`);

// const user = "Johnston";
// const age = 10;

// console.log(`My name is ${user}, age is ${age}`);

// let numberOfSeries = "Nechta serial ko'rdingiz?";

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const question = prompt("Oxirgi ko'rgan serialingiz?", "");
// seriesDB.series = question;

// const question2 = prompt("Nechi baxo berasiz?", "");
// seriesDB.genres = question2;

// console.log(seriesDB);

// const age = +prompt("How old are you?", "");

// age > 25 ? console.log("Horror films") : console.log("Carton");
