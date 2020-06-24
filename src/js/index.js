import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const firstname = 'Pawel';
const lastname = 'Slupski';
const age = 32;

const heading = document.querySelector('.main__heading--js');
console.log(heading.innerHTML);

function greeting(firstname, lastname, age) {
  console.log(`Hi! My name is ${firstname} ${lastname} and I am ${age} years old. I am pleased to welcome you to my website.`);
}

const greeting2 = () => {
  console.log(`Another hi with the fat arrow JS function :)`);
}

greeting(firstname, lastname, age);
greeting2();

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => { 
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--hide');
  const header = document.querySelector('.header--js');
  header.classList.toggle('header--shrink');
})

const startOfDay = moment().startOf('day').fromNow();
console.log(startOfDay);

