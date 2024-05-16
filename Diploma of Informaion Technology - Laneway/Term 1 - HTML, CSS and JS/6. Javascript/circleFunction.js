// function hello() {
//     console.log("Hello");
// }

// hello();

// const greet = function() {
//     console.log("greetings");
// }

// greet();

// const bye = () => {
//     console.log(
//         "bye"
//     );
// }

// bye();

// function som(x, y) {
//     return x + y;
// }

// console.log(som(10, 20));


const circle = (radius) => {
    let areaCircle = 3.14 * (radius ** 2);
    let circuferemceCircle = 3.14 * radius;
    return `The area is ${areaCircle} and the circuference is ${circuferemceCircle.toFixed(2)}`;
}

console.log(circle(10));