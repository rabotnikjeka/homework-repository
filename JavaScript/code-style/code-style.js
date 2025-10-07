// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
// function multiply(a,b){
//   return a*b;
// }
// const person ={name:'Alice',age:30};
// if(person.age>18){console.log('Adult');}
// else{console.log('Minor');}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
// function x(a, b) {
//   let c = a * b;
//   return c;
// }
// let d = x(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
// let items = ["apple", 'banana', "orange"];
// let price = {apple: 1, banana: 2, orange:3 };
// const total = price['apple'] + price["banana"] + price.orange;

// function calculateTotal(items) {
//   return items.reduce(function(total, item) {return total + item.price; }, 0); }

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

//1 задание

function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

const person = {
  name: "Alice",
  age: 30,
};

if (person.age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//2 задание

function workTimeCalculate(days, hoursAtDay) {
  const workTime = days * hoursAtDay;
  return workTime;
}

const userWorkTime = workTimeCalculate(5, 10);

console.log(userWorkTime);

//3 задание

const fruits = ["apple", "banana", "orange"];
const fruitPricies = {
  apple: 1,
  banana: 2,
  orange: 3,
};
const totalPrice = calculateTotal(fruits, fruitPricies);

function calculateTotal(items, pricies) {
  return items.reduce((total, item) => total + pricies[item], 0);
}

console.log(totalPrice);

//4 задание

userInfo = {
  userName: "max",
  userEmail: "123@123.com",
  userPassword: "password",
};

function validateForm(info) {
  const inputUserName = prompt("Введите имя");
  if (inputUserName === null || inputUserName === "") {
    console.log("Вы не ввели имя");
    return;
  } else if (inputUserName !== info.userName) {
    console.log("Нет такого пользователя");
    return;
  }
  const inputUserEmail = prompt("Введите адрес электронной почты");
  if (inputUserEmail === null || inputUserEmail === "") {
    console.log("Вы не ввели адрес электронной почты");
    return;
  } else if (inputUserEmail !== info.userEmail) {
    console.log("Неверный адрес электронной почты");
    return;
  }
  const inputUserPassword = prompt("Введите пароль");
  if (inputUserPassword === null || inputUserPassword === "") {
    console.log("Вы не ввели пароль");
    return;
  } else if (inputUserPassword !== info.userPassword) {
    console.log("Неверный пароль");
    return;
  }
  console.log("Форма успешно отправлена!");
}

validateForm(userInfo);
