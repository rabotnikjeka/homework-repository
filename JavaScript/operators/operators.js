let a = Number(prompt("Введите ваше число"));
const c = 2;
let result;
let chekResult;
function chek(obj) {
  return obj === 0;
}
result = a % c;
chekResult = chek(result);
if (chekResult === true) console.log(a + " - четное число");
else console.log(a + " - нечетное число");
console.log();
let userName = prompt("Как вас зовут?");
let spaceName = "Guest";
console.log("Hello, " + (userName || spaceName) + "!");
