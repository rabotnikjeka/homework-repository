// Первое задание
let yourNumber = Number(prompt("Введите число"));
if (yourNumber < 0) {
  console.log("Ваше число отрицательное");
} else if (yourNumber > 0) {
  console.log("Ваше число положительное");
} else if (yourNumber === 0) {
  console.log("Вы ввели ноль");
} else console.log("Вы ввели не число");
// Второе задание
let weight = Number(prompt("Введите свой вес в кг"));
let height = Number(prompt("Введите свой рост в см"));
height = height / 100;
let index = weight / height ** 2;
console.log(index);
if (index <= 16) {
  console.log("Выраженный дефицит массы тела");
} else if (index > 16 && index <= 18.5) {
  console.log("Недостаточная (дефицит) масса тела");
} else if (index > 18.5 && index <= 25) {
  console.log("Норма");
} else if (index > 25 && index < 30) {
  console.log("Избыточная масса тела (предожирение)");
} else if (index > 30 && index <= 35) {
  console.log("Ожирение первой степени");
} else if (index > 35 && index <= 40) {
  console.log("Ожирение второй степени");
} else console.log("Ожирение третьей степени (морбидное)");
// Третье задание
let monthNumber = Number(prompt("Введите номер месяца"));
let month;
switch (monthNumber) {
  case 1:
    month = "Январь";
    break;
  case 2:
    month = "Февраль";
    break;
  case 3:
    month = "Март";
    break;
  case 4:
    month = "Апрель";
    break;
  case 5:
    month = "Май";
    break;
  case 6:
    month = "Июнь";
    break;
  case 7:
    month = "Июль";
    break;
  case 8:
    month = "Август";
    break;
  case 9:
    month = "Сентябрь";
    break;
  case 10:
    month = "Октябрь";
    break;
  case 11:
    month = "Ноябрь";
    break;
  case 12:
    month = "Декабрь";
    break;
  default:
    month = "Неверный номер месяца";
}
console.log(month);
// Четверное задание
switch (month) {
  case "Декабрь":
  case "Январь":
  case "Февраль":
    console.log("Это зимний месяц");
    break;
  case "Март":
  case "Апрель":
  case "Май":
    console.log("Это весенний месяц");
    break;
  case "Июнь":
  case "Июль":
  case "Август":
    console.log("Это летний месяц");
    break;
  case "Сентябрь":
  case "Октябрь":
  case "Ноябрь":
    console.log("Это осенний месяц");
    break;
  default:
    month = "Такого месяца нет";
}
