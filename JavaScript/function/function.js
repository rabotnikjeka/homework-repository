//Первое задание
const userName = prompt("Введите слово для проверки на палиндром");
const userNameLower = userName.toLowerCase().replace(/\s/gi, "");
const palindromeUser = [...userNameLower];

function palindromeCheck(palindromeArray) {
  const palindromeArrayString = palindromeArray.join();
  reversePalindrome = [...palindromeArray.reverse()];
  palindromeArray.reverse("");
  const reversePalindromeString = reversePalindrome.join();
  if (reversePalindromeString === palindromeArrayString) {
    return userName + " - это палиндром";
  } else return userName + " - это не палиндром";
}

console.log(palindromeCheck(palindromeUser));

//Второе задание

const userString =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim minus molestiae quam quaerat ipsam similique, eius nulla laudantium molestias vel? Neque doloremque doloribus alias. Minus ab magnam aliquam amet?";
const space = " ";

function stringToArrayOfStrings(stringToSeparate, separator) {
  arrayOfStrings = stringToSeparate.split(separator);
  temp = arrayOfStrings[0];
  for (let j = 0; j < arrayOfStrings.length; j++) {
    if (temp.length > arrayOfStrings[j].length) temp = arrayOfStrings[j];
  }
  return temp + " - Самое короткое первое слово";
}

console.log(stringToArrayOfStrings(userString, space));

//Третье задание

const userInputPhoneNumber = prompt("Введите номер телефона без кода региона");
const arrUserInputPhoneNumber = [...userInputPhoneNumber];
const regionCode = "+7";

function correctUserInputPhoneNumber(inputPhoneNumber) {
  if (inputPhoneNumber.length === 9) {
    inputPhoneNumber.unshift(regionCode);
    inputPhoneNumber.splice(1, 0, " (");
    inputPhoneNumber.splice(5, 0, ") ");
    inputPhoneNumber.splice(9, 0, "-");
    let inputPhoneNumberString = inputPhoneNumber.join("");
    return inputPhoneNumberString;
  } else return "Неверный формат номера";
}

console.log(correctUserInputPhoneNumber(arrUserInputPhoneNumber));

//Четвертое задание

const arrOfNumbers = [12, 78, 21, 11, 75];
function minNumberSearch(numbers) {
  tempMin = numbers[0];
  tempMax = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (tempMin > numbers[i]) tempMin = numbers[i];
    if (tempMax < numbers[i]) tempMax = numbers[i];
  }

  console.log(tempMax + " - Самое большое число");
  console.log(tempMin + " - Самое маленькое число");
}

minNumberSearch(arrOfNumbers);

//Пятое задание
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort(arrOfNumbers);
