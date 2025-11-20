// 1 задание
const safeDivide = function (divisible, divider) {
  if (divider === 0) {
    throw new Error("Division by 0 is not possible");
  }
  return divisible / divider;
};
try {
  console.log(safeDivide(14, 0));
} catch (error) {
  console.log(`Error! ${error.message}`);
} finally {
  console.log("Операция завершена.");
}

// 2 задание

function transformJSON(json) {
  try {
    const result = JSON.parse(json);
    return result;
  } catch (error) {
    console.error("Ошибка при парсинге JSON:", error.message);
    return null;
  }
}

const jsonString = '{"name": "Evgeniy", "age": 25}';
console.log(transformJSON(jsonString));
const jsonString2 = "{name: Evgeniy, age: 25}";
console.log(transformJSON(jsonString2));

// 3 задание

function checkAccess(age) {
  try {
    if (age < 18) {
      throw new Error("Доступ запрещен");
    }
    console.log("Доступ разрешен");
  } catch (error) {
    console.error(error.message);
  }
}

checkAccess(20);
checkAccess(15);
