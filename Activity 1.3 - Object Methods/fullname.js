// 1. Create an Object with a function

let person = {
    firstName: 'Robert',
    lastName: 'Daniels',
    birthYear: 1972,

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    calculateAge: function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    },

    // 3. Modify the Object
    updateName: function (newFirstName, newLastName){
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
};

// 2. Use the Methods
console.log(`Full Name: ${person.getFullName()}`);
console.log(`Age: ${person.calculateAge()}`);

// Calling & update the person's name
person.updateName('Bob', 'Rands');
console.log(`The updated Full Name: ${person.getFullName()}`);
