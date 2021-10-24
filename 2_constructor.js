//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instatiate an Object
const book1 = new Book('Book One', 'Ram Pothineni', '2013');
const book2 = new Book('Book One', 'Virat Kohli', '2016');

console.log(book1.getSummary());