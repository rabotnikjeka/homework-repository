// задание 1

const student = {
  name: "Anna",
  age: 30,
  address: {
    city: "Moscow",
    street: "Lenina",
    house: "14",
    apartment: "25",
  },
  scoreHistory: [5, 5, 5, 3, 4],
  sayHi: () => console.log("Hello, Anna!"),
}; //

const copyObjectSpread = { ...student }; // поверхностное копирование через spread
const copyObjectObjectAssign = Object.assign({}, student); // поверхностное копирование через Object.assign

copyObjectSpread.address.city = "Omsk"; // изменение вложенного объекта

console.log(copyObjectSpread.address.city);
console.log(student.address.city); // тк копирование было поверхностным, то изменение в копии отразились на оригинальном объекте

copyObjectObjectAssign.scoreHistory[0] = 3; // изменение вложенного массива

console.log(copyObjectObjectAssign.scoreHistory[0]);
console.log(student.scoreHistory[0]); // тк копирование было поверхностным, то изменение в копии отразились на оригинальном объекте

// задание 2

const deedCopyJson = JSON.parse(JSON.stringify(student));
student.sayHi();
deedCopyJson.sayHi = () => console.log("Hello, student!"); // добавил строчку чтоб не ловить ошибку
deedCopyJson.sayHi(); // В данном случае была применена техника глубокого копирования с использованием JSON метода
// тк копирование производилось с помощью JSON метода, который не может копировать функции
// то при попытке вызова функции мы получаем ошибку

// задание 3

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  } // проверка объекта перед копированием, чтоб не копировать примитивы и null тк type of null === object
  const copy = Array.isArray(obj) ? [] : {}; // условие через тернарный оператор суть которого в создании контейнера с исходным типом массив или объект (в зависимости от того что копируем)
  for (let key in obj) {
    // циклом проходим по объекту
    if (obj.hasOwnProperty(key)) {
      // проверка на наличие свойств у самого объекта а не наследованные от прототипа
      copy[key] = deepCopy(obj[key]); // рекурсивный вызов функции для вложенных объектов типа объект/массив
    }
  }
  return copy; // возвращает готовую копию
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3;

console.log(original.b.c); // результат 2 тк функция сделала глубокое копирование, изменения копии не отражаются на оригинале
