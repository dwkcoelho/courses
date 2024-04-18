let speed = 0
const pilotName = prompt('Pilot`s Name:')
alert(`Ship Speed is ${speed}`)
const accelerate = prompt('What speed would you like to accelerate to?')

confirm(`We are going for speed ${accelerate}km/s`)

if(accelerate < 0 || accelerate === 0) {
    alert('Ship is stopped. Consider starting and increasing speed')
} else if (accelerate > 0 && accelerate < 40) {
    alert('You are slow. We can increase more')
} else if (accelerate >= 40 &&  accelerate < 80) {
    alert('Seems like a good speed to maintain')
} else if (accelerate >= 80 &&  accelerate < 100) {
    alert('High speed. Consider decreasing')
} else if (accelerate >= 100) {
    alert('Dangerous speed. Automatic forced control')
} else {
    alert('Invalida data!')
}
