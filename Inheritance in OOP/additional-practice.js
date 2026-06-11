// Task1: Create a class called "Animal" with properties "name" and "species". Include a method called "describe" that returns a string describing the animal. Then create a subclass called "Dog" that inherits from "Animal" and adds an additional property called "breed". Include a method called "bark" that return a string describing the dog's bark.
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Describe method
    describe() {
        return `${this.name} is a ${this.species}.`;
    }
}
// subclass dog
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    // Override describe method
    bark() {
        return `${this.name} says Woof!.`;
    }
}
// instance of dog
const dog1 = new Dog('Buddy', 'Golden Retriever');
const dog2 = new Dog('Max', 'Labrador Retriever');
// Use of method
console.log(dog1.describe());
console.log(dog1.bark());
console.log(dog2.describe());
console.log(dog2.bark());

class Device {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    // getDevice method
    getDevice() {
        return `This is a ${brand} ${model}.`
    }
}
// subclass
class Smartphone extends Device {
    constructor(brand, model, operatingSystem, screenSize) {
        super(brand, model);
        this.operatingSystem = operatingSystem;
        this.screenSize = screenSize;
    }
    // Override getDevice method
    getDevice() {
        return `This is a ${this.brand} ${this.model} with ${this.operatingSystem} operating system and a screen size of ${this.screenSize} inches.`;
    }
}
// instance of smartphone
const phone1 = new Smartphone('Apple', 'iPhone 13', 'iOS', 6.1);
const phone2 = new Smartphone('Samsung', 'Galaxy S21', 'Android', 6.2);
// use of method
console.log(phone1.getDevice());
console.log(phone2.getDevice());
