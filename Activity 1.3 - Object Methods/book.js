// Additional Practice: Object Methods
let book = {
    title: 'Rewire',
    author: 'Nicole Vignola',
    yearPublished: 2017,

    // Summary method
    getSummary: function() {
        return `${this.title} by ${this.author} (published in ${this.yearPublished})`
    },

    // Update method
    updateYear: function(newYearPublished) {
        this.yearPublished = newYearPublished;
    },
};

// Calling methods
console.log(`Book: ${book.getSummary()}`);

book.updateYear(2018);
console.log(`Book with updated year of publication: ${book.getSummary()}`);
