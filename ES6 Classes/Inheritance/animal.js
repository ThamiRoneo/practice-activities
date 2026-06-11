class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // method to describe the animal
    describe() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    // method specific to dog
    bark() {
        return `${this.name} says Woof!`
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, 'Cat');
        this.breed = breed;
    }

    // method to specific to a cat
    meow() {
        return `${this.name} says Meow!`
    }
}

    // instance of a dog
    let dog1 = new Dog('Buddy', 'Golden Retriever');
    console.log(dog1.describe());
    console.log(dog1.bark());

    let cat1 = new Cat('Deli', 'Maine Coon');
    console.log(cat1.describe());
    console.log(cat1.meow());
