// первое задание
function closureExample() {
  const x = 1;

  function inner() {
    console.log(x);
  }
  return inner;
}

const func = closureExample();
func();

// второе задание

function createUser(name) {
  const role = "user";
  function setCity(city) {
    const userCity = city;
    function showInfo() {
      console.log(`${name} lives in ${userCity}. Role: ${role}`);
    }
    return showInfo;
  }
  return setCity;
}

const withCity = createUser("Anna");
const showAnna = withCity("Moscow");
showAnna();

// Третье задание

function fibonacciNumbers() {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Из кэша:", cache[n], ` Искомое число Фибоначчи - ${n}`);
      return cache[n];
    }

    const x = (1 + Math.sqrt(5)) / 2;
    const y = (1 - Math.sqrt(5)) / 2;

    const fibonacciNumber = Math.round((x ** n - y ** n) / Math.sqrt(5));

    cache[n] = fibonacciNumber;
    console.log("Вычислено:", fibonacciNumber, ` Искомое число Фибоначчи - ${n}`);
    return fibonacciNumber;
  };
}

const fib = fibonacciNumbers();

fib(5);
fib(10);
fib(15);
fib(10);
fib(5);
// реализовал вариант без цикла тк в мире уже существует формула для определения конкртного числа Фибоначчи), но добавил замыкание и кэш

function FibonacciCalculator() {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log(`Из кэша: Искомое число Фибоначчи(${n}) = ${cache[n]}`);
      return cache[n];
    }

    let result;
    if (n === 0) result = 0;
    else if (n === 1) result = 1;
    else {
      let previously = 0;
      let current = 1;
      for (let i = 2; i <= n; i++) {
        const next = previously + current;
        previously = current;
        current = next;
      }
      result = current;
    }

    cache[n] = result;
    console.log(`Вычислено: Искомое число Фибоначчи(${n}) = ${result}`);
    return result;
  };
}

const fibonacci = FibonacciCalculator();
fibonacci(5);
fibonacci(10);
fibonacci(15);
fibonacci(10);
fibonacci(5);

// Я думаю что то такое ожидалось по заданию, не без помощи гугла но что то похожее на правду получилось)
