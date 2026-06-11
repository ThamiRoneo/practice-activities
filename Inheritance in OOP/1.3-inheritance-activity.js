class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Details method
    getDetails() {
        return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    // override getDetails method
    getDetails() {
        return `This is a ${this.year} ${this.make} ${this.model} with ${this.numDoors} doors.`;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, numDoors, batterylife) {
        super(make, model, year, numDoors);
        this.batterylife = batterylife;
    }
    // Electric car getDetails method
    getElectricCarDetails() {
        return `This is a ${this.year} ${this.make} ${this.model} with ${this.numDoors} doors and a battery life of ${this.batterylife} hours.`;
    }
}
// Inatances for cars
const vehicle1 = new Vehicle('Toyota', 'Corolla', 2020);
const car1 = new Car('Honda', 'Civic', 2021, 4);
const electricCar1 = new ElectricCar('Tesla', 'Model S', 2020, 4, 10);
// use methods
console.log(vehicle1.getDetails());
console.log(car1.getDetails());
console.log(electricCar1.getElectricCarDetails());
