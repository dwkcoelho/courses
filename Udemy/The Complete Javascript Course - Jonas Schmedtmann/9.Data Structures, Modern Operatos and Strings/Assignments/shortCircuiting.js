const { books } = require("./books");

// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
// This function should return true if the book uses Java, or a string 'no data available'
// if it uses other language or no programming language at all.

const [ firstBook, secondBook ] = books;

function hasExamplesInJava(book) {
    return book.programmingLanguage === 'Java' || 'no data available';
}
// console.log(hasExamplesInJava(firstBook));
// console.log(hasExamplesInJava(secondBook));

// Some of the book objects have the onlineContent property, which is either true or false. 
// Loop over the books array, and for the books that provide online content, log to the console a string in this format:
//  "${title}" provides online content. Use short-circuiting.

books.forEach(book => {
    book.onlineContent && console.log(`${book.title} provides online content`);
})