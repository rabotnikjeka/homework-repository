//Первое задание

const JSstring = "JavaScript is fun";

console.log(JSstring.includes("fun"));

//Второе задание

if (!JSstring.includes("FUN")) {
  console.log("тут есть falsy");
} else console.log("тут нет falsy");

//Третье задание

const firstName = "John ";
const lastName = "Doe";
const occupation = "software developer";
const greeting = `Hello, my name is ${firstName}${lastName}. I am a ${occupation}`;

console.log(greeting);

//Четвертое задание

const varNull = null;
const varUndefined = undefined;
let varBool;

varBool = varNull === varUndefined;

console.log(varBool);

/* тут выводится false тк === оператор строгого сравнения,
сравнивает как тип так и значение, тк значение отсутствует сравнивает тип
у null тип object у undefined - undefuned, типы раные - false*/

varBool = varNull == varUndefined;

console.log(varBool);

/* тут выводится true тк == оператор нестрогий,
сравнивает только по значению, тип приводит к общему,
например при сравнении 5 == '5' также будет true, тк == приведет к общему типу
при этом значения одинаковы, поэтому выводит true
const a = 5;
const b = "5";
if (a == b) {
  console.log("equal");
} else console.log("not equal");*/

//Пятое задание

console.log(1 + "1");

//произошла конкатенация строк, вывелось число 1 и к нему присоеденилась строка в которой написано 1
//при этом строка с 1 не число а именно строка
//если в данный изменить как 1 + 1 + "1", то уже выведится 21 тк 1+1 будет 2 и к нему добавиться строка "1"
//при конкатенации результат приводится к строке
