let listFizzBuzz = [];

function fizzBuzz(numb) {
    for(let i = 0; i <= numb; i++){
        if(i % 3 === 0 && i % 5 ===0) {
            listFizzBuzz.push("fizz buzz");
        } else if (i % 5 === 0) {
            listFizzBuzz.push("buzz");
        } else if(i % 3 === 0) {
            listFizzBuzz.push("fizz");
        } else {
            listFizzBuzz.push(i);
        }
    }
}

fizzBuzz(100);
console.log(listFizzBuzz);


// for(let i = 0; i <= numb; i++){
//     if(i % 3 === 0 && i % 5 ===0) {
//         console.log("fizz buzz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else if(i % 3 === 0) {
//         console.log("fizz");
//     } else {
//         console.log(i);
//     }
// }