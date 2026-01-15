//Первое задание
class Counter {
  #count;
  constructor(count) {
    this.#count = count;
  }
  increaseCount() {
    this.#count++;
  }
  decreaseCount() {
    this.#count--;
  }
  showCount() {
    console.log(this.#count);
  }
}

const counterTest = new Counter(1);
counterTest.increaseCount();
counterTest.decreaseCount();
counterTest.showCount();

//Второе задание

class EmailValidator {
  static isValid(email) {
    const isContains = email.includes("@");
    if (isContains) {
      return isContains;
    }
  }
}

const userEmail = "123@123.com";

if (EmailValidator.isValid(userEmail)) {
  console.log("email валиден");
} else {
  console.log("Невалидный email");
}

//Третье задание

class Order {
  constructor(price, quantity) {
    this.price = price;
    this.quantity = quantity;
  }
  #calculateTotal() {
    const amount = this.price * this.quantity;
    console.log(amount);
  }

  showTotal() {
    this.#calculateTotal();
  }
}

const newOrder = new Order(50, 3);
newOrder.showTotal();
