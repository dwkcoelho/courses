const tourist = prompt("What is your name?");

let count = 0;
let cities = "";

let visit = confirm("Did you visit some city?");

while(visit !== false) {
    let city = prompt("Which city? ");
    count++;

    cities += " - " + city +"\n";

    visit = confirm("Did you visit some city?");
}

alert(`${tourist} visited ${count} cities:\n${cities}`);