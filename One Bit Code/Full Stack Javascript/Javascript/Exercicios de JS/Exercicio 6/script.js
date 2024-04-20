let option
let spaceshipName = prompt('What is the spaceship name?')

option = prompt('Do you want to replace any letter?\n1. Yes\n2. No')
while(option === '1') {
    let letter = prompt('Which letter do you want to replace?')

    if(!spaceshipName.includes(letter)) {
        alert('Invalid data!')
    } else {
        
        let substituteLetter = prompt('What letter do you want to replace it with?')

        for(let i = 0; i < spaceshipName.length; i++) {
            if(spaceshipName[i] === letter) {
            spaceshipName = spaceshipName.replace(spaceshipName[i], substituteLetter)
            }

        }
    }


    option = prompt('Do you want to replace another letter?\n1. Yes\n2. No')
}

alert(`The new name of the spaceship is: ${spaceshipName}`)

