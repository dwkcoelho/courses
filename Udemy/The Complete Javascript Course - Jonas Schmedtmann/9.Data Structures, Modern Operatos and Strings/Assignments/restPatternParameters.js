const { books } = require("./books");

//Destructure the keywords property (array) of the first book from the books array into 
//variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword,
//and the rest of the keywords should be assigned to the rest variable (it should be an array).
const [ firstBook ] = books;
const [ mainKeyword, ...rest ] = firstBook.keywords;
// console.log(mainKeyword, rest);

//Destructure the second book from the books array into a variable called bookPublisher.
//The bookPublisher variable should be assigned with the value of the publisher property of the book object. 
//Assign the rest of the properties to the restOfTheBook variable.
const [ , secondBook ] = books;
const { publisher: bookPublisher, ...restOfTheBook } = secondBook;
// console.log(bookPublisher, restOfTheBook);

//Write a function called printBookAuthorsCount that has two parameters called title and authors. 
//The authors parameter should accept any number of arguments. This function should log to the console 
//a string formatted like that: "The book "${title}" has ${authors.length} authors".
function printBookAuthorsCount(title, ...authors) {
    console.log(`he book "${title}" has ${authors.length} authors`)
}
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');