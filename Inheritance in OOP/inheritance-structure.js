// Task number 1: Create a base class called "Vehicle" with properties for make, model, and year. Include a method called "getDetails" that returns a string with the vehicle's details.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year
    }

    // Details method
    getDetails() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}`;
    }
}
// Task number 2: Create a subclass called "Car" that inherits from the "Vehicle" class. Add an additional property for "numDoors" and override the "getDetails" method to include the number of doors in the returned string.
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    // Override getDetails method
    getDetails() {
        return `This car is a ${this.year} ${this.make} ${this.model} with ${this.numDoors} doors.`;
    }
}
// Task number 3: Create a subclass called "ElectricCar" that inherits from the "Car" class. Add an additional property for "batteryLife" and override the "getElectricCarDetails" method to include the battery life in the returned string.
class ElectricCar extends Car {
    constructor(make, model, year, numDoors, batteryLife) {
        super(make, model, year, numDoors);
        this.batteryLife = batteryLife;
    }

    // Override getDetails method
    getElectricCarDetails() {
        return `This electric car is a ${this.year} ${this.make} ${this.model} with ${this.numDoors} doors and a battery life of ${this.batteryLife} hours.`;
    }
}

// Example usage:
const myCar = new Car('Toyota', 'Corolla', 2020, 4);
console.log(myCar.getDetails());

const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2021, 4, 12);
console.log(myElectricCar.getElectricCarDetails());
