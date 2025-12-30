//Первое задание
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showCarInfo() {
    console.log(`Изготовитель: ${this.brand}. Модель: ${this.model}`);
  }
}

const newCarMarkII = new Car("Toyota", "Mark II");
newCarMarkII.showCarInfo();
const newCarVesta = new Car("Lada", "Vesta");
newCarVesta.showCarInfo();
const newCarFit = new Car("Honda", "Fit");
newCarFit.showCarInfo();

//Второе задание
class ElectricCar extends Car {
  constructor(brand, model, capacity) {
    super(brand, model);
    this.capacity = capacity;
  }
  showCarInfo() {
    console.log(
      `Изготовитель: ${this.brand}. Модель: ${this.model}. Емкость батареи: ${this.capacity} kWh`
    );
  }
}

const newCarModelX = new ElectricCar("Tesla", "Model X", 100);
newCarModelX.showCarInfo();

//Третье задание
// на самом деле второе задание уже было примером полиморфизма но сделаю еще 1 пример

class GasolineCar extends Car {
  constructor(brand, model, fuelType) {
    super(brand, model);
    this.fuelType = fuelType;
  }

  showCarInfo() {
    console.log(` ${this.brand} ${this.model}. Топливо: ${this.fuelType}`);
  }
}

const cars = [
  new GasolineCar("Audi", "TT", "АИ-98"),
  new GasolineCar("BMW", "M5", "АИ-98"),
  new GasolineCar("Hyundai", "Accent", "АИ-95"),
  new GasolineCar("GAZ", "3102", "АИ-92"),
];

cars.forEach((car) => {
  car.showCarInfo();
});
