// Первое задание

for (let a = 0; a < 11; a++) {
  console.log(a);
}

// Второе задание

let x = 1;
let y = 0;

while (x < 101) {
  y = x + y;
  x++;
}
console.log(y);

//Третье задание через циклы

for (let z = 2; z <= 100; z++) {
  let primeNumber = true;

  for (let v = 2; v < z; v++) {
    if (z % v === 0) {
      primeNumber = false;
      break;
    }
  }

  if (primeNumber) {
    console.log(z);
  }
}

//Третье задание через алгоритм Эратосфена

console.log(2);
console.log(3);
console.log(5);
console.log(7);

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i % 3 === 0) {
    continue;
  }
  if (i % 5 === 0) {
    continue;
  }
  if (i % 7 === 0) {
    continue;
  }
  console.log(i);
}
/* Тут я сразу вывел 2, 3, 5, 7 тк по условиям алгоритма они базово
являются простыми и нет особого смысла их проверять. 
Возможно можно было иначе как то, тк выглядит немного странно и костыльно
Но зато оно работает)Правда только до 100*/
