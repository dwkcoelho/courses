// let firstName = "Diego";

// console.log(firstName.length);
// console.log(firstName.toUpperCase());
// // It find the number position of the string.
// console.log(firstName.indexOf("D"));

// let fullName = "Diego Alegre";

// //Get the space

// let findChar = fullName.indexOf(" ");

// //Get first name

// let fName = fullName.slice(0, findChar);
// console.log(fName);

// //Get Surname

// let SName = fullName.slice(findChar + 1, fullName.length);
// console.log(SName);

//Get the username
let userName = prompt("What is your name?");

//Tranform whole name in lower case
let nameLower = userName.toLowerCase();

//Get the space
let findChar = userName.indexOf(" ");

//First Letter from
let firstLetterName = nameLower.slice(0, 1).toUpperCase();

//Get other letters from First Name
let otherLettersName = nameLower.slice(1, findChar);

//First letter from Surname
let firstLetterSurname = nameLower
  .slice(findChar + 1, findChar + 2)
  .toUpperCase();

//Get other letters from Surname
let otherLettersSurname = nameLower.slice(findChar + 2, nameLower.length);

//Put everything together
let resultName = `${firstLetterName}${otherLettersName} ${firstLetterSurname}${otherLettersSurname}`;
console.log(resultName);
