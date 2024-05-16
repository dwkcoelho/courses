/*
let myName = "Diego";

//Check if the data have it inside
let result = myName.includes("i");
let resultTwo = myName.includes("Dieg");
console.log(result, resultTwo);

// Undefined behavior
let count;

console.log(count);
console.log(count + 3);

// Null behavior
count = null;
console.log(count);
console.log(count + 3);
console.log(count + "Hello");
*/

let password = "1234567";

console.log(password.length);

if(password.length >= 8 && password.length < 12) {
    console.log("It is acceptable");
} else if(password.length >= 12) {
    console.log("It is a strong password");
} else {
    console.log("Please include at least 8 characters")
}
