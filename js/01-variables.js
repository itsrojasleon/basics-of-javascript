// Strings
let firstName = 'Luis';
let lastName = 'Rojas';

// console.log('Hello ' + firstName + ' ' + lastName);
// console.log('I am ' +  age);

let nameUpperCase = firstName.toLocaleUpperCase();
let nameLowerCase = lastName.toLowerCase();

let firstLetterName = firstName.charAt(0);
let firstLetter = firstName.charAt((lastName.length - 1));

let str = firstName.substr(1,2);
// console.log(str)

// End Strings...

////////////////////////

// Numbers
let age = 32;
age += 1;

let weight = 80;
weight -=2;

let sandwich = 1;
age += sandwich;

let playFootball = 3;
peso -= playFootball;

let winePrice = 200.3;
let total = Math.round(winePrice * 3) / 100;
let totalStr = total.toFixed(2);
let total2 = parseFloat(totalStr);

let pizza = 8;
let people = 2;
let amountPerPerson = pizza / people;