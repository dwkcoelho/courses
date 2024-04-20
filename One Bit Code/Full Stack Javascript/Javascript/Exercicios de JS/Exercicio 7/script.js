let inverseName = ''

let spaceshipName = prompt('What is the spaceship name?')

    for(let i = spaceshipName.length - 1; i >= 0; i--) {

        if(spaceshipName[i] === 'e' || spaceshipName[i] === 'E') {
            break
        }

        inverseName += spaceshipName[i]
    }

alert(`Original Name: ${spaceshipName}\nHidden Name: ${inverseName}`)