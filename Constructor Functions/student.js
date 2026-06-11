function Student(name, grade, school) {
    this.name = name;
    this.grade = grade;
    this.school = school;
}

// a method to the prototype
Student.prototype.getDetails = function() {
    return `Name: ${this.name}, Grade: ${this.grade}, School: ${this.school}`;
}

// Instances of a student object
let student1 = new Student('Alice', 11, 'Greenwood High');
let student2 = new Student('Bob', 10, 'Lakeside School');

// Use the method
console.log(student1.getDetails());
console.log(student2.getDetails());
