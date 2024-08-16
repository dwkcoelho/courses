const { books } = require("./books");

//Destructure the first book object from the books array into variables called title, author and ISBN.
const [ firstBook ] = books;
const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

//Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. 
//The tags variable should be assigned with the value of the keywords property.
const { keywords: tags } = firstBook;
// console.log(tags);

//The seventh book from the books array is missing the programmingLanguage property. 
//Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. 
//Assign the programmingLanguage variable with a default value of 'unknown'.
const [ , , , , , , seventhBook ] = books;
const { language, programmingLanguage = 'unknown' } = seventhBook;
// console.log(language, programmingLanguage)

//Below are two variables called bookTitle and bookAuthor. 
//Reassign them with the values of the title and author properties of the first book object from the books array.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = firstBook);
// console.log(bookAuthor, bookTitle);

//Destructure the first book object from the books array into a variable called bookRating. 
//In the result of your destructuring, the bookRating variable should be assigned with the value of the 
//book[0].thirdParty.goodreads.rating proper
const { thirdParty: { goodreads: { rating: bookRating } } } = firstBook;
// console.log(bookRating);

//Write a function called printBookInfo that has three parameters called title, author and year.
//This function should work for a single object passed as an argument, 
//and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
//If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

function printBookInfo({ title, author, year = 'year unknow' }) {
    console.log(`${title} by ${author}, ${year}`);
}
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });