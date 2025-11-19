// первое задание

const arrNumbers = [1, 2, 32, 4, 5, 27];

function sum(arr, index) {
  const length = arr.length;

  if (index === length) return 0;
  return arr[index] + sum(arr, index + 1);
}

console.log(sum(arrNumbers, 0));

// второе задание

function max(arr, index) {
  if (index === arr.length - 1) return arr[index];

  if (arr[index] > max(arr, index + 1)) {
    return arr[index];
  } else {
    return max(arr, index + 1);
  }
}

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
