//Первое задание
class Book {
  title = "";
  author = "";
  pages = "";
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  showBookInfo() {
    console.log(
      `Книга ${this.title}, ее автор ${this.author} и она содержит ${this.pages} страниц`
    );
  }
}

const warAndPeace = new Book("Война и мир", "Л.Н.Толстой", "1000");
warAndPeace.showBookInfo();

//Второе задание

class User {
  name = "";
  email = "";
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  displayInfo() {
    console.log(`Пользователь ${this.name}, его адрес электронной почты ${this.email} `);
  }
}

const userAlex = new User("Alex", "AlexDarkStaker98@mail.ru");
const userMax = new User("Max", "MaxPro100Cool@gmail.com");
userAlex.displayInfo();
userMax.displayInfo();

//Третье задание

class Rectangle {
  #width = 0;
  #height = 0;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }
  get perimeter() {
    return (this.#width + this.#height) * 2;
  }

  set width(value) {
    if (value <= 0) {
      console.error("Ширина должна быть положительным числом.");
    } else {
      this.#width = value;
    }
  }
  set height(value) {
    if (value <= 0) {
      console.error("Высота должна быть положительным числом.");
    } else {
      this.#height = value;
    }
  }

  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
}

const myRect = new Rectangle(5, 10);
console.log(myRect.area); // 50
console.log(myRect.perimeter); // 30
myRect.height = -3; // Высота должна быть положительным числом.
myRect.width = -3; // Ширина должна быть положительным числом.
console.log(myRect.width); // 5
console.log(myRect.height); // 5
