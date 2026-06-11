// Base Class
class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    // Summary method
    getSummary() {
        return `${this.title} by ${this.author} (published in ${this.yearPublished})`;
    }
}

// Subclass EBook
class EBook extends Book {
 constructor(title, author, yearPublished, fileSize) {
        super(title, author, yearPublished);
        this.fileSize = fileSize;
    }

    download() {
        return `Downloading ${this.getSummary()} with file size ${this.fileSize}MB...`;
    }
}

// Book Instances
let book1 = new Book('Rewire', 'Nicole Vignola', 2017);
let ebook1 = new EBook('Rewire', 'Nicole Vignola', 2017, 5);
console.log(`Book: ${book1.getSummary()}`);
console.log(`EBook: ${ebook1.download()}`);
