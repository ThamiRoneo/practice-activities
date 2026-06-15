// Task 1: Copy an array
console.log(`Task 1: Copy an array`);
let fruits = ['apple', 'banana', 'cherry'];
let fruitsCopy = [...fruits];
console.log(fruitsCopy);

// Task 2: Combine arrays
console.log(`\nTask 2: Combine arrays`);
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Task 3: Copy and modify an object
console.log(`\nTask 3: Copy and modify`);
let car = { make: 'Toyota', model: 'Corolla', year: 2020 };
let newCar = { ...car, color: 'blue' };
console.log(newCar);

// Task 4: Merge objects
console.log(`Task 4: Merge objects`);
let person1 = { name: 'Alice', age: 25 };
let person2 = { job: 'Engineer', country: 'USA' };
let mergedPerson = { ...person1, ...person2 };
console.log(mergedPerson);
