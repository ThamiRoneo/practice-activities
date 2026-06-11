// Base class
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    // Details method
    getDetails() {
        return `${this.name} is ${this.age} years old and lives in ${this.location}.`;
    }


    // Update location method
    updateLocation(newLocation) {
        this.location = newLocation;
    }
}

// Subclass
class Employee extends Person {
    constructor(name, age, location, position, salary) {
        super(name, age, location);
        this.position = position;
        this.salary = salary;
    }

    // Employee details method
    getEmployeeDetails() {
        return `Employee: ${this.getDetails()} Holds ${this.position} position, earning R${this.salary} per month`;
    }
}

// Person instances for the methods
let person1 = new Person('Siyabonga', 24, 'Johannesburg, South Africa');
console.log(person1.getDetails());

// updating location and calling the method
person1.updateLocation('New York, United States');
console.log(`Details with Updated location: ${person1.getDetails()}`);

// Employee instance
let employee1 = new Employee('David', 26, 'Cape Town, South Africa', 'Senior Java Developer', 45000);
console.log(employee1.getEmployeeDetails());
