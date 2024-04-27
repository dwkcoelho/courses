let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceShip() {
    spaceship.name = prompt('What is the spaceship`s name?')
    spaceship.type = prompt('What is the spaceship`s type?')
    spaceship.maximumSpeed = prompt('What is the spaceship`s maximum speed')

}

function stop(){
    alert(`Spaceship:\nName: ${spaceship.name}\nType: ${spaceship.type}\nCurrent speed: ${spaceship.speed}`)
}

function speedUp(){
    let acceleration = parseFloat(prompt('How much do you like speed up?'))
    speedUp(acceleration)
    if(spaceship.speed > spaceship.maximumSpeed) {
        alert(`Speed: ${spaceship.speed}\nMaximum speed: ${spaceship.maximumSpeed}`)
    }
}

function showMenu() {
    let option = ''
    option = prompt('Do you want to stop or speed up the spaceship?\n1. Stop\n2. Speed up')
    
    do {
        switch(option) {
            case '1':
                stop()
                break
            case '2':
                speedUp()
                break
            case '3':
                alert('Invalid Option')
        }
    } while(option !== '1')

}

registerSpaceShip()
showMenu()