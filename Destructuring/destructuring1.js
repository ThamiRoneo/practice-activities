// Task 1: Destructure an Array
console.log('Task 1: Destructure an Array')
let fruits = ['apple', 'banana', 'cherry'];
// extracting values into variable
let [firstFruit, secondFruit, thirdFruit] = fruits;
// log variables to console
console.log(firstFruit, secondFruit, thirdFruit);

// Task 2: Destructure an Object
console.log('\n\nTask 2: Destructure an Object');
let car = {make: 'Mercedes Benz', model: 'A45s 4matic', year: 2025};
let {make: carMake, model: carModel, year: carYear} = car;
console.log(`Car Make: ${carMake}\nCar Model: ${carModel}\nCar Year: ${carYear}`);

// Task 3: Destructure with Default Values and Renaming
console.log(`\n\nTask 3: Destructure with Default Values and Renaming`);
let colors = ['red'];
let [primaryColor, secondaryColor = 'green', tertiaryColor = 'blue'] = colors;
console.log(`Colors: ${primaryColor}, ${secondaryColor}, ${tertiaryColor}.\n`);

let person = {name: 'John Doe', age: 19};
let {name: personName, age: personAge} = person;
console.log(`Name: ${personName}\nAge: ${personAge}\n\n`);

// Task 4: Nested Destructuring
console.log(`Task 4: Nested Destructuring`);
let numbers = [1, [2, 3], 4];
let[first, [second, third], fourth] = numbers;
console.log(`Numbers: ${first}, ${second}, ${third}, ${fourth}\n\n`);

let user = {name: 'John Doe', age: 25, address: {city: 'Johannesburg', zip: 'ZA'}};
let {name: userName, age: userAge, address: {city: userCity, zip: userZip}} = user;
console.log(`User Name: ${userName}\nUser's Age: ${userAge}\nUser's Address: ${userCity}, ${userZip}\n\n`);

// Additional Practice
console.log(`Additional Practice`);
let book = {title: 'The Comfort Zone', author: 'kristen Butler', year: 2016};
let {title: bookTitle, author: bookAuthor, year: bookYear} = book;
function displayBook(book) {
    return `${bookTitle} by ${bookAuthor} published in ${bookYear}.`;
}
console.log(displayBook(bookTitle, bookAuthor, bookYear));
