// Первое задание

const arrNumbers = [1, 2, 3, 4, 5];

const newArr = (arr) => {
  notEvens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      notEvens.push(arr[i]);
    }
  }
  console.log(notEvens);
};

newArr(arrNumbers);

// Третье задание

const hof = (func, arr) => {
  const newArr = [];
  for (let element of arr) {
    newArr.push(func(element));
  }
  return newArr;
};

const doubleEvens = (element) => {
  if (element % 2 === 0) {
    return element * 2;
  }
  return element;
};

console.log(hof(doubleEvens, arrNumbers));

// Второе задание

const user = {
  name: "Max",
  welcome: function () {
    setTimeout(() => {
      console.log("Welcome to our page, " + this.name);
    }, 1000);
  },
};

user.welcome();
