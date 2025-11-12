// // 1 задание
// // В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// // используя функции или другие средства:
// const product1 = { name: "Product 1", price: 10 };
// const product2 = { name: "Product 2", price: 20 };
// const total1 = product1.price * 1.2;
// const total2 = product2.price * 1.2;
// console.log("Total for Product 1:", total1);
// console.log("Total for Product 2:", total2);

// // 2 задание
// // Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
// if (user.isAdmin) {
//   if (user.isActive) {
//     if (user.age > 18) {
//       console.log("Access granted");
//     }
//   }
// }

// // 3 задание

// // В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// // чтобы улучшить читаемость и повторное использование кода:
// function checkStock(item) {
//   return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
// }
// function processOrder(order) {
//   // Валидация данных заказа
//   if (!order.id || !order.items || order.items.length === 0) {
//     console.log("Invalid order");
//     return;
//   }
//   // Рассчет суммы
//   let total = 0;
//   for (let item of order.items) {
//     total += item.price * item.quantity;
//   }
//   // Проверка наличия на складе
//   for (let item of order.items) {
//     if (!checkStock(item)) {
//       console.log("Item out of stock:", item.name);
//       return;
//     }
//   }
//   // Выполнение заказа
//   console.log("Order processed with total:", total);
// }

// 1 задание

const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
];

function calcTotal(price) {
  return price * 1.2;
}

for (let product of products) {
  let calcPrice = calcTotal(product.price);
  console.log("Total for ", product.name + ":", calcPrice);
}

// 2 задание

const user = { isAdmin: true, isActive: true, age: 25 };

if (user.isAdmin && user.isActive && user.age > 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3 задание

const order = {
  id: 1,
  items: [
    { name: "Apple", price: 50, quantity: 3 },
    { name: "Banana", price: 35, quantity: 4 },
  ],
};

function checkStock(item) {
  return Math.random() < 0.5;
}

function validateOrder(order) {
  if (!order.id || !order.items || order.items.length === 0) {
    console.log("Invalid order");
    return false;
  }
  return true;
}

function calculateTotal(order) {
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}

function checkItemStorage(order) {
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log("Item out of stock:", item.name);
      return false;
    }
  }
  return true;
}

function processOrder(order) {
  if (!validateOrder(order)) return;

  const totalSum = calculateTotal(order);

  if (!checkItemStorage(order)) return;

  console.log("Order processed with total:", totalSum);
}

processOrder(order);
