//Which car is faster?

// let firstCarName = prompt("Insert the first car name: ");
// let firstCarSpeed = prompt("Insert the first car speed:");

// let secondCarName = prompt("Insert the second car name: ");
// let secondCarSpeed = prompt("Insert the second car speed:");

// if (firstCarSpeed > secondCarSpeed) {
//     alert(`${firstCarName} is faster`);
// } else if (secondCarSpeed > firstCarSpeed) {
//     alert(`${secondCarName} is faster`);
// } else {
//     alert(`${firstCarName} and ${secondCarName} have same speed`);
// }

//Damage Calculator

const nameAtacker = prompt("Name atacker: ");
const power = parseFloat(prompt("Power: "));

const nameDefensor = prompt("Name defensor: ");
let lifeScore = parseFloat(prompt("Life score: "));
const defense = parseFloat(prompt("Defense: "));
const shield = confirm("Does he/she have shield?");

if(power > defense && shield === false) {
    let damage = power - defense;
    alert(`${nameDefensor} \nLife: ${lifeScore}\nShield: ${shield} \nDamage: ${damage}\nLife Updated: ${lifeScore - damage}`);
} else if (power > defense && shield === true) {
    let damage = power - defense;
    alert(`${nameDefensor} \nLife: ${lifeScore}\nShield: ${shield} \nDamage: ${damage}\nLife Updated: ${lifeScore - (damage / 2)}`);
} else {
    let damage = 0;
    alert(`${nameDefensor} \nLife: ${lifeScore}\nShield: ${shield} \nDamage: ${damage}\nLife Updated: ${lifeScore}`);
}