async function imc(weight, height) {
    if(typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('Arguments must be of type number')
    } 

    return weight / (height ** 2)
}

async function showImc(weight, height) {
    try {
        console.log('Calculating...')
        const result = await imc(weight, height)
        
        console.log(`The result was: ${result}`)
    
        if(result < 18.5) console.log('Thinness')
        else if(result < 25) console.log('Normal')
        else if(result < 30) console.log('Overweight')
        else if(result < 40) console.log('Obesity')
        else console.log('Severe obesity')
    } catch(error) {
        console.log(error)
    }
}

showImc(100, 1.8)
showImc(80, 1.85)
showImc('hehe', 2.00)