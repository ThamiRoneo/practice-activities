// Additional practice number 1
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// Prototype method
Animal.prototype.describe = function() {
    return `${this.name} is a ${this.species}.`;
}

// Instances of Animal object
const dog = new Animal('Buddy', 'dog');
const cat = new Animal('Whiskers', 'cat');

// Use a method
console.log(dog.describe());
console.log(cat.describe());

// Additional practice number 2
function Teacher(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

// Prototype method
Teacher.prototype.getFullName = function() {
    return `Full Names of a Teacher: ${this.firstName} ${this.lastName}`;
}
// Instances of Teacher object
let teacher1 = new Teacher('John', 'Doe', 'Physical Science');
let teacher2 = new Teacher('lefty', 'Bands', 'Life Orientation');

// Use method
console.log(teacher1.getFullName());
console.log(teacher2.getFullName());
