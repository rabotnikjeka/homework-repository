//Первое задание
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Привет! меня зовут ${this.name}`);
  }
}

class Student extends Person {
  course;
  constructor(name, course) {
    super(name);
    this.course = course;
  }
  introduce() {
    console.log(`Привет! меня зовут ${this.name} я учусь на ${this.course} курсе`);
  }
}
const newPersonAlex = new Person("Alex");
newPersonAlex.introduce();
const newStudentAlex = new Student("Alex", 3);
newStudentAlex.introduce();
console.log(Student.prototype);

//Второе задание

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log(`Я работаю на позиции ${this.position}`);
  }
  introduce() {
    console.log(`Привет! меня зовут ${this.name}. Я работаю на позиции ${this.position}`);
  }
}

const newEmployeeAlex = new Employee("Alex", "engineer");
newEmployeeAlex.work();
newEmployeeAlex.introduce();

//Третье задание

const Vehicle = {
  type: "Транспорт",
  move: function () {
    console.log(`${this.type} начал движение`);
  },
};

const Car = Object.create(Vehicle);

Car.type = "Автомобиль";
Car.drive = function () {
  console.log(`${this.type} поехал`);
};

Vehicle.move();
Car.drive();
