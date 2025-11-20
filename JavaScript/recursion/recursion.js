// первое задание

const arrNumbers = [1, 2, 32, 4, 5, 27];

const sum = (arr, index) => {
  const length = arr.length;

  if (index === length) return 0;
  return arr[index] + sum(arr, index + 1);
};

console.log(sum(arrNumbers, 0));

// второе задание

const max = (arr, index) => {
  if (index === arr.length - 1) return arr[index];
  const recMax = max(arr, index + 1);
  return arr[index] > recMax ? arr[index] : recMax;
};

console.log(max(arrNumbers, 0));

// четвертое задание

function FibonacciCalculator() {
  const cache = {};

  return function fibonacci(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    if (n === 0) return 0;
    else if (n === 1) return 1;

    let result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
  };
}

const fibonacciResult = FibonacciCalculator();
console.log(fibonacciResult(500));

// третье задание

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  } // проверка объекта перед копированием, чтоб не копировать примитивы и null тк type of null === object
  const copy = Array.isArray(obj) ? [] : {}; // условие через тернарный оператор суть которого в создании контейнера с исходным типом массив или объект (в зависимости от того что копируем)
  for (let key in obj) {
    // циклом проходим по объекту
    if (obj.hasOwnProperty(key)) {
      // проверка на наличие свойств у самого объекта а не наследованные от прототипа
      copy[key] = deepCopy(obj[key]); // рекурсивный вызов функции для вложенных объектов типа объект/массив и запись в переменную
    }
  }
  return copy; // возвращает готовую копию
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3;

console.log(original.b.c); // результат 2 тк функция сделала глубокое копирование, изменения копии не отражаются на оригинале
