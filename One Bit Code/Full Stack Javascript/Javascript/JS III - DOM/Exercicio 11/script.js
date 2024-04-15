function newPlayer() {
    const playersList = document.getElementById("playersList");

    const nameInput = document.getElementById("name").value;
    const numberInput = document.getElementById("number").value;
    const positionInput = document.getElementById("position").value;

    const confirmed = confirm("Pick " + nameInput + " like " + positionInput + " and with number " + numberInput);

    if(confirmed) {
        const ul = document.createElement("ul");
        ul.id = "teamList";

        const playerLi = document.createElement("li");
        playerLi.id = "player-" + numberInput;

        playerLi.innerHTML = "Name: " + nameInput + ", " + positionInput + "("+ numberInput + ")";

        ul.appendChild(document.createElement('br'))
        ul.appendChild(playerLi);
        playersList.appendChild(ul);
    }

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("position").value = "";
}

function removePlayer() {

    const numberPlayer = document.getElementById("numberToRemove").value;
    const playerToRemove = document.getElementById("player-" + numberPlayer);

    const confirmed = confirm("Do you want to remove player number: " + numberPlayer + "?");

    if(confirmed) {
        document.getElementById("teamList").removeChild(playerToRemove);
        document.getElementById("numberToRemove").value = "";
    }



    
}