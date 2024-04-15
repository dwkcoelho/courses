//Interact Menu
// let choice = "";

// do {

//     choice = parseFloat(prompt("Choose a option:\n1- One\n2- Two\n3- Three\n4- Four\n5- Exit"));
//     switch(choice) {
//         case 1:
//             alert("Option One");
//             break;
//         case 2:
//             alert("Option Two");
//             break;
//         case 3:
//             alert("Option Three");
//             break;
//         case 4:
//             alert("Option Four");
//             break;
//         case 5:              
//             alert("Exit");
//             break;
//         default:
//             alert("Invalid Option");         
//     }

// } while(choice !== 5);

let money = parseFloat(prompt("Money Quantity: "));
let bankFunction = "";
let quantity = 0
do {
    bankFunction = parseFloat(prompt(`Your balance is: ${money}\n1-Add\n2-Remove\n3-Exit`));

    switch(bankFunction) {
        case 1:
            quantity = parseFloat(prompt("How much do you want to add? "));
            money += quantity;
            break;
        case 2:
            quantity = parseFloat(prompt("How much do you want to remove? "));
            money -= quantity;
            break;
        case 3:
            alert("Exit");
            break; 
        default:
            alert("Invalid option");
    }
}while(bankFunction !== 3);