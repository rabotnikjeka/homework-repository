// второе задание

const student = {
  name: "Alice",

  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function () {
    setTimeout(() => this.greet(), 1000);
  },
};

student.greet(); // Hello, Alice
student.delayedGreet(); // Hello, undefined

// четвертое задание

function sayHello() {
  console.log("Hello, " + this.name);
}

const admin = {
  name: "Bob",
};

const user = {
  name: "John",
};

const sayHelloToAdmin = sayHello.bind(admin);

sayHelloToAdmin();

// const sayHelloToUser = sayHelloToAdmin.bind(user); // нельзя перепривязать через bind поэтому 2 раза выводится Bob

// sayHelloToUser();

sayHello.call(user); // Вот так можно исправить

// первое задание

const adminInfo = {
  userName: "Max",
  isAdmin: true,
  role: "",
  access: function () {
    if (this.isAdmin) {
      this.role = "admin";
      console.log("access is allowed");
    } else {
      this.role = "user";
      console.log("access is not allowed");
    }
  },
};

adminInfo.access(); // Все работает корректно, выводится access is allowed

const allowCheckAdmin = adminInfo.access; // присвоили метод другой переменной

allowCheckAdmin(); // при вызове выводится access is not allowed тк функция вызывается не как метод объекта и this = undefined

// третье задание

function welcomeAlert(welcome, endWords) {
  console.log(`${welcome}, ${this.userName}! You have ${this.role} access. ${endWords}`);
}

const userInfo = {
  userName: "Anna",
  isAdmin: false,
  role: "",
  access: function () {
    if (this.isAdmin) {
      this.role = "admin";
    } else {
      this.role = "user";
    }
  },
};
userInfo.access();

welcomeAlert.call(userInfo, "Welcome to our page", "Nice to meet you!");
welcomeAlert.apply(userInfo, ["Welcome to our page", "Nice to meet you!"]);
const newWelcomeAlert = welcomeAlert.bind(
  adminInfo,
  "Welcome to our page",
  "Nice to meet you!"
);
newWelcomeAlert();
