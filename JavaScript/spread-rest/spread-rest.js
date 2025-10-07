//Первое задание

const numbers = [1, 2, 3, 4, 5];

function avg(...numb) {
  return numb.reduce((total, num) => total + num) / num.length;
}

console.log(avg(...numbers));

//Второе задание

const info = {
  name: "Max",
  age: "26",
  country: "Russia",
};

const { name, age, country } = info;

console.log(name, age, country);

//Третье задание

const parameters = {
  brand: "BMW",
  body: "e34",
  valueHistory: [4, 5, 3, 4, 5],
  damage: {
    hood: "broken",
    rapids: "destroyed",
    suspension: "normal",
    engine: "normal",
  },
};

const {
  brand,
  body,
  valueHistory: [a, b, c, d, e],
  damage: { hood, rapids, suspension, engine },
} = parameters;

console.log("Brand - " + brand);
console.log("Body - " + body);
console.log("Value History -" + "", a, b, c, d, e);
console.log("damage:hood - " + hood);
console.log("damage:rapids - " + rapids);
console.log("damage:suspension - " + suspension);
console.log("damage:engine - " + engine);

//Четвертое задание

const someNumbers = [1, 2, 3, 4, 5];

const anotherArr = [10, 10, ...someNumbers, 10, 10];

console.log(anotherArr);

//Пятое задание

const personInfo = {
  userName: "Alex",
  userAge: "29",
  userCity: "Samara",
};

function newObjectExcept(object, key) {
  const { [key]: remove, ...rest } = object;
  return rest;
}

console.log(newObjectExcept(personInfo, "userCity"));
