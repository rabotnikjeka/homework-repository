let typeNumber = 123;
let typeBoolean = true;
let typeString = "Hello World!";
let typeUndefined;
let typeNull = null;
let typeArray;
let typeObject;

typeArray = [1, 2, 3, 4, 5];
typeObject = {
  size: "large",
  color: "black",
  sex: "M",
  sale: "10",
};

console.log(typeof typeNumber);
console.log(typeof typeBoolean);
console.log(typeof typeString);
console.log(typeof typeUndefined);
console.log(typeof typeNull);
console.log(typeof typeArray);
console.log(typeof typeObject);

function equal(equalColor) {
  return equalColor.color === "white";
}
let equalColorResult = equal(typeObject);
console.log(equalColorResult);
console.log();
let a = 1;
let b = a;
console.log(a);
console.log(b);
b = 2;
console.log(a);
console.log(b);
/* пример хранения данных по значению
 тут если изменить значение b, то значене a останется неизменным, 
 тк при таком типе хранения данных  
 значения переменных независимы и используют само значение 
 Работает только с примитивами*/
let c = {
  title: "1984",
};
let d = c;
console.log(c.title);
console.log(d.title);
c.title = "Farm animal";
console.log(c.title);
console.log(d.title);
/* пример хранения данных по ссылке
тут при изменении значения будет изменятся и значение переменной которая на нее ссылается
неважно изменить через c или через d значение ключа 
тк переменная хранит в себе ссылку на объект
работает со сложными типами данных типа массив или объект*/
