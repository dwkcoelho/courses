// // Object

// let user = {
//     //Property
//     name: "John",
//     age: 37,
//     location: "Melbourne, Australia",
//     nicknames: ["Jhonny", "Jim"],
//     //Methods
//     login: function() {
//         console.log("The user has loggin in");
//     }
// }

// // Math Object

// let area = 9.5;

// // 9.5 >= 10 // 9.4 =< 9
// console.log(Math.round(area));

// //It will round to down number
// console.log(Math.floor(area));

// //It will round to up number
// console.log(Math.ceil(area));

// //Random Numbers

// const random = Math.random();
// console.log(Math.round(random * 100));

let person = {
    name: "Benjamin Ford",
    age: 24,
    profession: "Developer",
    company: "Coding Ltd.",
    favoriteFood: "pizza",
    height: 1.7,
    weight: 70,
    BMI: function () {
        console.log((person.weight /(person.height ** 2)).toFixed(2));
    }
}

person.BMI()


