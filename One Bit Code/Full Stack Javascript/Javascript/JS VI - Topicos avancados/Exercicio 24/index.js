function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if(typeof weight !== 'number' || typeof height !== 'number') {
            reject('Arguments must be of type number')
        } else {
            resolve(weight / (height ** 2))
        }
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        console.log(`The result was: ${result}`)

        if(result < 18.5) console.log('Thinness')
        else if(result < 25) console.log('Normal')
        else if(result < 30) console.log('Overweight')
        else if(result < 40) console.log('Obesity')
        else console.log('Severe obesity')
    }).catch((err) => {
        console.log(err)
    })

    console.log('Calculating...')
}

showImc(100, 1.8)
showImc(80, 1.85)
showImc('hehe', 2.00)