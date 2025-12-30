// первое задание

const firstTask = function () {
  "use strict";
  const person = {};

  Object.defineProperty(person, "name", {
    value: "Алексей",
    writable: false,
    configurable: false,
    enumerable: true,
  });

  Object.defineProperty(person, "id", {
    value: 777,
    writable: false,
    configurable: false,
    enumerable: true,
  });

  console.log("Объект до попытки изменений:", person);

  try {
    console.log("Пытаемся изменить name...");
    person.name = "Дмитрий";
  } catch (e) {
    console.error("Ошибка при изменении:", e.message);
  }

  try {
    console.log("Пытаемся удалить id...");
    delete person.id;
  } catch (e) {
    console.error("Ошибка при удалении:", e.message);
  }

  console.log("Объект после попыток изменений:", person);
};
firstTask();

// второе задание
const secondTask = function () {
  const user = {
    name: "Иван",
    age: 25,
  };

  Object.defineProperty(user, "id", {
    value: "123",
    enumerable: false,
    writable: true,
    configurable: true,
  });

  for (let key in user) {
    console.log("Найден ключ:", key);
  }

  console.log(Object.keys(user));

  console.log("id пользователя:", user.id);
};
secondTask();
