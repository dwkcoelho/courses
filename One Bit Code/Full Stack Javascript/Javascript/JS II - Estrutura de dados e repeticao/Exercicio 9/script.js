let option;
let base;
let height;
let side;
let bigBase;
let smallBase;
let radius;

function triangleArea(base, height) {
    return (base * height) / 2;
}

function rectangleArea(base, height) {
    return (base * height);
}

function squareArea(side) {
    return (side ** 2);
}

function trapezeArea(bigBase, smallBase, height) {
    return ((bigBase + smallBase) * height) / 2;
}

function circleArea(radius, pi = 3.14) {
    return  pi * (radius ** 2);
}

do {

    option = parseFloat(prompt("Geometric Calculator:\n" + "1. Triangle Area\n" + "2. Rectangle Area\n"
    + "3. Square Area\n" + "4. Trapeze Area\n" + "5. Circle Area\n" + "6. Exit\n"));

    switch(option){
        case 1:
            base = parseFloat(prompt("Write a base number:"));
            height = parseFloat(prompt("Write a height number:"));
            alert("Your triangle area is: " + triangleArea(base, height));
            break
        case 2:
            base = parseFloat(prompt("Write a base number:"));
            height = parseFloat(prompt("Write a height number:"));
            alert("Your rectangle area is: " + rectangleArea(base, height));
            break
        case 3:
            side = parseFloat(prompt("Write a side number:"));
            alert("Your square area is: " + squareArea(side));
            break
        case 4: 
            bigBase = parseFloat(prompt("Write a big base number:"));
            smallBase = parseFloat(prompt("Write a small base number:"));
            height = parseFloat(prompt("Write a height number:"));
            alert("Your trapeze area is: " + trapezeArea(bigBase, smallBase, height));
            break
        case 5:
            radius = parseFloat(prompt("Write a radius number:"));
            alert("Your circle area is: " + circleArea(radius));
            break
        case 6:   
            alert("Exiting!")
            break
        default:
            alert("Invalid option");
            break
    }
}while(option != 6);