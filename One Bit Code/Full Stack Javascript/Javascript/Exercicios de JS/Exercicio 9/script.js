function slowDown(velocity, printer){
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert('The spaceship was stopped. The doors can be open!')
}

slowDown(150, function(velocity){
    alert(`The spaceship speed is ${velocity}`)
})