let a = Number(prompt("Введите ваше число"));
const c = 2;
let result;
let checkResult;
function check(obj) {
  return obj === 0;
}
result = a % c;
checkResult = check(result);
if (checkResult) console.log(a + " - четное число");
else console.log(a + " - нечетное число");
let userName = prompt("Как вас зовут?");
let spaceName = "Guest";
console.log("Hello, " + (userName || spaceName) + "!");
