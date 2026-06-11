// Define a constructor function

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    // method to display car information
    this.displayInfo = function() {
        return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    };

    // method to update car model
    this.updateModel = function(newModel) {
        this.model = newModel;
    };

}

// Instances
let car1 = new Car('Toyota', 'Corolla', 2020);
let car2 = new Car('Honda', 'Civic', 2019);

// Calling methods
console.log(car1.displayInfo());
console.log(car2.displayInfo());

// Updating model of car1
car1.updateModel('Camry');
console.log(`After updating model: ${car1.displayInfo()}`);
