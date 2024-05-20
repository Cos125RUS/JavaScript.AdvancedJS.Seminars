'use strict'

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

class Library {
    constructor() {
        this.books = [];
        this.length = 0;
    }

    addBooks(books) {
        books.forEach(element => {
            this.books.push(element);
            this.length++;
        });
    }

    [Symbol.iterator] = function () {
        return {
            iterableBooks: this.books,
            current: 0,
            last: this.length,
            next() {
                return this.current < this.last ? {done: false, value: this.iterableBooks[this.current++]} : { done: true };
            }
        }
    };
}

const library = new Library();
library.addBooks(books);
// console.log(library);
for (const book of library) {
    console.log(book);
}

console.log('----------');
console.log(books);
books.push({title: "Fahrenheit", author: "Ray" });
console.log(books);
