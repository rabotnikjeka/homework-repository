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

const n = Number(prompt());

function theBinetFormulaConst() {
  const x = (1 + Math.sqrt(5)) / 2;
  const y = (1 - Math.sqrt(5)) / 2;
  function fibonacciNumberFunction() {
    let fn = (x ** n - y ** n) / Math.sqrt(5);
    console.log(Math.round(fn));
  }
  return fibonacciNumberFunction;
}

const fibonacciNumber = theBinetFormulaConst();
fibonacciNumber();
