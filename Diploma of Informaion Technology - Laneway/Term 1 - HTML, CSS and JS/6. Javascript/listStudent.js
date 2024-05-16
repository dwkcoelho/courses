// let ages = [10, 25, 30, 35, 40];

// console.log(ages);
// console.log(ages.length);
// console.log(ages[0]);

// let mixed = ["dog", 12,  " cat", 9, true];

// console.log(mixed);
// console.log(mixed.length);
// console.log(mixed[0]);
// console.log(mixed[0].length);
// console.log(mixed[0][0]);

// let animals = ["Dog", "Cat", "Goat", "Bird"];
// let fruits = ["Apple", "Orange", "Banana", "Grape"];
// // Transform it in a string and join it with some caracter you putted
// let resultString = animals.join(" ");
// console.log(resultString);

// // Return the index about the value
// let resultIndex = animals.indexOf("Cat");
// console.log(resultIndex);

// // Concat variable and values in the array
// let resultConcat = animals.concat(fruits);
// console.log(resultConcat);

// // Add a value in the end of original array
// let resultAdd = animals.push("Horse");
// console.log(animals);
// console.log(resultAdd);

// // Remove a value in the end of orignal array

// let resultRemove = animals.pop();
// console.log(animals);
// console.log(resultRemove);

// // Remove or add a value in any position of original array
// // First value = Index you want start. 
// // Second value = How much you want to delete.
// // Remove
// console.log(animals.indexOf("Goat"));
// let resultRemoveAnyPlace = animals.splice(2, 1);
// console.log(animals);

// // Add
// let resultAddAnyPlace = animals.splice(2, 0, "Tiger", "Prawn");
// console.log(animals);

let studentList = ["Josh", "Michael", "joHn", "Scarlet", "Bethany"];
console.log(studentList);

// Remove a student
let studentIndex = studentList.indexOf("Michael");
let removeStudent = studentList.splice(studentIndex, 1);
console.log(studentList);

// Add a student
let newStudent = "Jenny";
let addStudent = studentList.splice(studentList.length, 0, newStudent);
console.log(studentList);

// Correct name
studentIndex = studentList.indexOf("joHn");
// Transform lower case
let transformLowerCase = studentList[studentIndex].toLowerCase();
// Separe other lethers from the first letter
let separeOtherLethers = transformLowerCase.slice(1, transformLowerCase.length);
// Separe first letter and put it in upper case
let transformfirstLetter = studentList[studentIndex][0].toUpperCase();
// Correct name
let correctName = transformfirstLetter + separeOtherLethers;
// Substitute the name
let substituteName = studentList.splice(studentIndex, 1, correctName);

console.log(studentList);




// // Correct name
// let findJohn = studentList[studentList.indexOf("joHn")];
// // Transform lower case
// let transformLowerCase = findJohn.toLowerCase();
// // Separe other lethers from the first letter
// let separeOtherLethers = transformLowerCase.slice(1, transformLowerCase.length);
// // Separe first letter and put it in upper case
// let transformfirstLetter = findJohn[0].toUpperCase();
// // Correct name
// let correctName = transformfirstLetter + separeOtherLethers;
// // Substitute the name
// let substituteName = studentList.splice(1, 1, correctName);

// console.log(studentList);