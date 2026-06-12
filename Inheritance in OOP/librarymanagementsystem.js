class Book {
    constructor(title, author, yearOfPublication) {
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
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
    constructor(title, author, yearOfPublication, ) {

    }
}

 let book = [];

class Library {
    constructor(addBook, borrowBook, listBooks) {
        this.addBook = addBook;
        this.borrowBook = borrowBook;
        this.listBooks = listBooks;
    }
    // add a book
    addBook(book) {
        this.addBook.push(book);
    }
    // borrow a book
    borrowBook(title) {
        const bookIndex = this.addBook.findIndex(book => book.title === title);
        if (bookIndex !== -1) {
            return this.addBook.splice(bookIndex, 1)[0];
        } else {
            return null;
        }
    }
    // list all books
    listBooks() {
        return this.addBook.map(book => book.getDetails()).join('\n');
    }
}
