let speed = 0;

function speedUp() {
    return speed += 5
}

function slowDown() {
    return speed -= 5
}

function printData(name) {
    alert(`${name} Spaceship\n${speed}km/h`)
}

function onboard(name){
    
    let option = ''
    while(option !== '4') {
        option = prompt(`Onboard Menu:\n1. Speed up 5km/h\n2. Slow down 5km/h\n3. Informations about spaceship\n4. Exit`)

        switch(option) {
            case '1':
                speedUp()
                break
            case '2':
                if(speed > 0) {
                    slowDown()
                } else {
                    printData(name)
                }
                break
            case '3':
                printData(name) 
                break
            case '4':
                break
            default:
                alert('Invidalid Data!')
        }
    }

}

onboard("X")