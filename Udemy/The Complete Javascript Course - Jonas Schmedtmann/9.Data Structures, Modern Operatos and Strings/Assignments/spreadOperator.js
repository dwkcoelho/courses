const { books } = require("./books");

//Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. 
//The bookAuthors array should have just one level (no nested arrays).
const [ firstBook, secondBook ] = books;
const bookAuthors = [...firstBook.author, ...secondBook.author];
// console.log(bookAuthors);

//Write a function called spellWord that accepts a single string as an argument. 
//This function should log to the console each letter of the argument separated by a space.
function spellWord(word) {
    console.log(...word);
}
spellWord('Javascript');