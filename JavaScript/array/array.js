//Первое задание

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sqrtNumers = someNumbers.map((number) => number * number);

console.log(sqrtNumers);

//Второе задание

///Первый вариант

const arrNumbers = [1, 5, 1, 2, 3, 4, 3, 2, 5, 5, 1];

arrNumbers.sort();

const filterNumbers = arrNumbers.filter((num, index) => {
  return arrNumbers.indexOf(num) === index;
});
console.log(filterNumbers);

///Второй вариант

for (let y = 0; y < arrNumbers.length; y++) {
  for (let z = y + 1; z < arrNumbers.length; z++) {
    if (arrNumbers[y] === arrNumbers[z]) {
      arrNumbers[z] = null;
    }
  }
}
const filteredNumbers = arrNumbers.filter((num) => num !== null);
console.log(filteredNumbers);

//Третье задание

const sumArr = someNumbers.reduce((total, number) => (total = total + number), 0);

console.log(sumArr);

//Четвертое задание

///Первый вариант

[
  someNumbers[0],
  someNumbers[1],
  someNumbers[2],
  someNumbers[3],
  someNumbers[4],
  someNumbers[5],
  someNumbers[6],
  someNumbers[7],
  someNumbers[8],
] = [
  someNumbers[8],
  someNumbers[7],
  someNumbers[6],
  someNumbers[5],
  someNumbers[4],
  someNumbers[3],
  someNumbers[2],
  someNumbers[1],
  someNumbers[0],
];

console.log(someNumbers);

someNumbers.reverse();

///Второй вариант

let i = 0;
let j = someNumbers.length - 1;

while (i < j) {
  let swap = someNumbers[i];
  someNumbers[i] = someNumbers[j];
  someNumbers[j] = swap;
  i++;
  j--;
}

console.log(someNumbers);

/// Третий вариант
someNumbers.reverse();

let reversed = [];

for (let a = 0; a < someNumbers.length; a++) {
  reversed.unshift(someNumbers[a]);
}
console.log(reversed);

//Пятое задание

const stringConst = "Hello";
let stringLet = "World!";

console.log(stringConst);
console.log(stringLet);

//stringConst = "HELLO"; коменчу чтоб код запускался
stringLet = "WORLD!";

console.log(stringConst);
console.log(stringLet);

const arrConst = [1, 2, 3];
let arrlet = [4, 5, 6];

console.log(arrConst);
console.log(arrlet);

arrConst[0] = 7;
arrConst[1] = 8;
arrConst[2] = 9;
arrlet[0] = 10;
arrlet[1] = 11;
arrlet[2] = 12;

console.log(arrConst);
console.log(arrlet);

//arrConst = [111, 222, 333]; коменчу чтоб код запускался
arrlet = [444, 555, 666];

console.log(arrConst);
console.log(arrlet);
// При попытке переопределить значение переменной которая объявлена как const
// возникает ошибка из за которой код не идет дальше, тк как тип объявления const
// не позволяет менять путь по которому находится значение переменной
// в отличии от let где такого ограничения нет и переменную объявленную таким способом
// можно спокойно переопределить.
// Похожая ситуация с массивами, при попытке переопределлить массив объявленный как const
// получим также ошибку, но при этом значения внутри массива можно спокойно добавлять/удалять
// или еще как либо изменять, тк ссылка на массив остается неизменной, меняется только содержимое массива.
// Массив объявленный как let можно также спокойно переопределять и изменять его содержимое.
