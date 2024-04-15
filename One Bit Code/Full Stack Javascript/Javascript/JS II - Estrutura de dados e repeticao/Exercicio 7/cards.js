let cards = [];
let option;

do {

option = parseFloat(prompt(cards.length + " cards.\n1 - Add card\n2- Pull card\n3- Exit"));

switch(option) {
    case 1:
        let nameCard = prompt("Card Name: ");
        cards.unshift(nameCard);
        break
    case 2:
        if(cards.length != 0) {
            let pullCard = cards.shift();
            alert(`${pullCard} removed`);
        } else {        
            alert(`No have cards`);
        }

        break;
    case 3:
        break;
    default:
        alert("Invalid option");
    }
}while(option != 3);