// Car Constructor function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    // display info method
    this.displayInfo = function(){
        return `This car is a ${year} ${brand} ${model}`;
    }
}

// Instances of a car object
let car1 = new Car('Audi', 'A4', 1998);
let car2 = new Car('BMW', 'X5', 2020);

// Using the displayInfo method
console.log(car1.displayInfo());
console.log(car2.displayInfo());
