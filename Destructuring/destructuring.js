// Task 1: Destructure an Array
let fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit); // Output: apple banana cherry

// Task 2: Destructure an Object
let car = { make: 'Toyota', model: 'Corolla', year: 2020 };
let { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear); // Output: Toyota Corolla 2020

// Task 3: Destructure with Default Values
let colors = ['red'];
let [primaryColor, secondaryColor = 'green', tertiaryColor = 'blue'] = colors;
console.log(primaryColor, secondaryColor, tertiaryColor); // Output: red green blue

// Additional Practice
let user = {
    name: 'John Doe',
    age: 18,
    address: {city: 'Johannesburg', zip: 'ZA'}
}
// extracting values using destructuring
let { name: userName, age: userAge, address: { city: userCity, zip: userZip } } = user;
// logging variables to console
console.log(userName, userAge, userCity, userZip);
