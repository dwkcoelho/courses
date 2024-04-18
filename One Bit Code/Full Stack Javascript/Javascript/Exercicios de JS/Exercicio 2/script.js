alert('Who is older?')
const firstName = prompt('What is your name?')
const firstAge = prompt('How old are you?')
const secondName = prompt('What is your name?')
const secondAge = prompt('How old are you?')

if(firstAge > secondAge) {
    const ageDifference = parseFloat(firstAge - secondAge)
    alert(`${firstName} is older and is ${firstAge} years old\n${secondName} is younger and is ${secondAge} years old\nThe difference age is ${ageDifference}`)
} else if(secondAge > firstAge) {
    const ageDifference = parseFloat(secondAge - firstAge)
    alert(`${secondName} is older and is ${secondAge} years old\n${firstName} is younger and is ${firstAge} years old\nThe difference age is ${ageDifference}`)
} else {
    alert('They are the same age!')
}