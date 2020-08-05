"use strict";

//1

let a = 10;
let b = a * 3;
let c = a + b;
alert( `${a}, ${b}, ${c}` );

//2

let firstName = prompt("What is your name", "John");
let lastName = prompt("What is your last name", "Doe");
alert(`What\`s up,  ${firstName} ${lastName}`);

//3

let x = prompt('введите первое число');
let y = prompt( 'введите второе число');
alert( `${x * y}, ${x / y}, ${x - y}, ${+x + +y}` );

//4

let money = prompt('сколько стоит час работы?');
let hour = prompt('сколько часов в день вы работаете?');
let day = prompt('сколько дней в месяц вы работаете?');
alert( `Ваша ЗП составляет ${money * hour * day}` );

//5

let qwe = prompt('введите число');
if ( qwe % 2 == 1 ) alert('вы ввели нечетное число');
if ( qwe % 2 == 0 ) alert('вы ввели четное число');

//6

let rty = prompt('введите символ');
if ( isNaN(rty) == false) alert('вы ввели число');
if ( isNaN(rty) == true) alert('вы ввели не число');

//7

let random = Math.random();
random = random * 100;
let random2 = prompt('введите число');
if ( random > random2 == true ) alert( `введенное вами число меньше первого, ${random} > ${random2}` );
if ( random > random2 == false ) alert( `введенное вами число больше первого, ${random} < ${random2}` );

//8

let str = prompt('напишите', 'Мне нравится изучать Front-end');
let str2 = prompt('что вам нравится изучать');
let str3 = str.slice(0, -9);
let result = str3 + str2;
alert(result);

/*
let str = prompt('напишите', 'Мне нравится изучать Front-end');
let str2 = prompt('что вам нравится изучать');
alert(`${str.slice(0, -9)}${str2}`);
*/