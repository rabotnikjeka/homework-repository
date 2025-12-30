//Первое задание
class Counter {
  #count = 0;
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
    if (!isContains) {
      console.log("Невалидный email");
    } else {
      console.log("email валиден");
    }
  }
}

EmailValidator.isValid("123@123.com");

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
