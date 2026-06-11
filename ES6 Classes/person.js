class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    // method  to get full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // method to calculate age
    calculateAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }


}


// instances
let person1 = new Person('Randy', 'Prins', 1998);
let person2 = new Person('Stephen', 'Donalds', 2000);

// calling instances
console.log(`Person1 Full Name is: ${person1.getFullName()}`)
console.log(`Person2 is Full Name is: ${person2.getFullName()}`)
