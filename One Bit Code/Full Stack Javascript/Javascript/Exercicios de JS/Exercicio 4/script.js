const distance = prompt('Distance in light:')
const option = prompt('Measurement Converter:\n1. Parsec(pc)\n2. Astronomical Unit(AU)\n3. Kilometers(km)')

switch(option) {
    case '1':
        const pc = distance * 0.3066001
        alert(`Distance in light: ${distance}\nParsec: ${pc}pc `)
        break
    case '2':
        const au = distance * 63241.1
        alert(`Distance in light: ${distance}\nAstronomical Unit: ${au}AU `)
        break
    case '3':
        const km = distance * (9.5 * Math.pow(10,12))
        alert(`Distance in light: ${distance}\nKilometers: ${km}km `)
        break
    default:
        alert(`Distance in light: ${distance}\nUnit not identified: conversion out of scope`)
}


//1l.y = 
// 0,306601pc
// 63241.1AU
// 9.5 * 10 ** 12