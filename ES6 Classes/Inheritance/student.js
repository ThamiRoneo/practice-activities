// Base class
class Student {
    constructor(name, grade, school) {
        this.name = name;
        this.grade = grade;
        this.school = school;
    }

    // Details method
    getDetails() {
        return `Name: ${this.name}, Grade: ${this.grade}, School: ${this.school}`;
    }

    // Upgrade grade method
    updateGrade(newGrade) {
        this.grade = newGrade;
    }
}

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
class Teacher extends Person {
    constructor(name, age, location, subject, yearsOfExperience) {
        super(name, age, location);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }

    // Teacher details method
    getTeacherInfo() {
        return `Teacher: ${this.getDetails()} Teaches ${this.subject} with ${this.yearsOfExperience} years of experience.`;
    }
}

// Instances for Student class
let student1 = new Student('Andile', 10, 'Boys High');

// Instances for Teacher class
let teacher1 = new Teacher('John Doe', 40, 'Cape Town', 'Mathematics', 15);

// Calling methods
console.log(student1.getDetails());
console.log(teacher1.getTeacherInfo());
