"use strict";
//Первое задание

function addNumbers(a, b) {
  const c = 5;
  return a + b + c;
}

const sum = addNumbers(5, 10);
console.log(sum);

//Второе задание

function calcMultiplication(x, y) {
  const c = 5;
  return x * y + c;
}

const result = calcMultiplication(7, 2);
console.log(result);

//Третье задание

function showThisStrictOrRegularMode() {
  console.log("Обычный/Строгий режим:", this); // в обычном режиме this подставляет значение window, в строгом такого не происходит, он выдает undefined
}

showThisStrictOrRegularMode();

//Четвертое задание
const obj = {};

delete Object.prototype; // оставил обджект прототайп, тк метод toString можно удалить хоть из строгого хоть из обычного режима тк его configurable: true
console.log("код выполнен"); // в данном примере без строго режима получаем консоль лог тк получается удалить, в строгом получаем ошибку
