const { books } = require("./books");

// Use the for-of loop to loop over the books array and sum the pages of all books. 
// Use the pageSum variable below, and the pages property of the book objects.

let pagesSum = 0;
for (const book of books) {
    pagesSum += book.pages;
}
console.log(pagesSum);

// Below is the allAuthors variable which stores an empty array. 
// Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// Remember that each book object has the author property, which can be a string (if there is only a single author) 
// or an array (if there are multiple authors). You may need to use the typeof operator. 
// You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

let allAuthors = [];

for (const book of books) {
    if (typeof book.author === 'string') {
      allAuthors.push(book.author)
    } else {
      for (const author of book.author) {
        allAuthors.push(author);
      }
    }
  }

console.log(allAuthors)

// Use the for-of loop together with Array's entries() method to log each author 
// from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

for (const [i, a] of allAuthors.entries()) {
    console.log(`${i + 1}. ${a}`);
}