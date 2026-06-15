// Additional Practice - Spread Operators
// remove duplicates from an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let names = ['Ben', 'Given', 'Ben', 'Carol', 'Carol', 'Steve'];
console.log(removeDuplicates(names));

// Combine Array and Add New Elements
let array1 = [7, 8, 9];
let array2 = [10, 11, 12];

let combinedArrays = [...array1, ...array2, 12, 13];
console.log(`\nNew combined array:`, combinedArrays)

// Merge Objects and Add New Properties
let obj1 = {x: 1, y: 2};
let obj2 = {z: 3};

let mergedObj = { ...obj1, ...obj2, w: 10 };
console.log(`\nNewly Merged Object:`, mergedObj);
