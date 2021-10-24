//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Instatiate an Object
const book1 = new Book('Book One', 'Ram Pothineni', '2013');
const book2 = new Book('Book One', 'Virat Kohli', '2016');

console.log(book2);
book2.revise('2018');
console.log(book2);