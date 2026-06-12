class Book {
    constructor(title, author, yearOfPublication) {
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        this.isBorrowed = false;
    }
    // method to get book details
    getDetails() {
        return `${this.title} by ${this.author}, published in ${this.yearOfPublication}.`;
    }

}

class eBook extends Book {
    constructor(title, author, yearOfPublication, fileSize) {
        super(title, author, yearOfPublication);
        this.fileSize = fileSize;
    }
    // override getDetails method
    getDetails() {
        return `${this.title} by ${this.author}, published in ${this.yearOfPublication}, with a file size of ${this.fileSize} MB.`;
    }
}

class audioBook extends Book {
    constructor(title, author, yearOfPublication, duration) {
        super(title, author, yearOfPublication);
        this.duration = duration;
    }
    // override getDetails method
    getDetails() {
        return `${this.title} by ${this.author}, published in ${this.yearOfPublication}, with a duration of ${this.duration} minutes.`;
    }
}

const book1 = new Book('Clean Code', 'Robert Martin', 2016);
const ebook1 = new eBook('JavaScript Guide', 'Donald Reefs', 2020, 50);
const audio1 = new audioBook('Atomic Habits', 'James Clare', 2015, 65);

console.log(book1.getDetails());
console.log(ebook1.getDetails());
console.log(audio1.getDetails());

class Library {
    constructor() {
        this.books = [];
    }

    // add a book
    addBook(book) {
        this.books.push(book);
    }
    // borrow a book
    borrowBook(title) {
        const book = this.books.find(
            book => book.title === title
        );

        if(book) {
            book.isBorrowed = true;
        }
    }

    // list all books
    listBooks() {
        this.books.forEach(book => {
            console.log(book.getDetails());
        });
    }
    // return a book
    returnBook(title) {
        const book = this.books.find(
            book => book.title === title
        );

        if(book) {
            book.isBorrowed = false;
        }
    }
}

// Instances for methods

const library = new Library();
// use methods
library.addBook(book1);
library.addBook(ebook1);
library.addBook(audio1);
library.listBooks();
library.borrowBook('Clean Code');
library.returnBook('Clean Code');
