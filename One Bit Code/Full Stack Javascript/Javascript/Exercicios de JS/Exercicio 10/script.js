let hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    [`Darwin`, 15, false]
]

let moreThan9 = hitchedSpaceships.filter((spaceship) => {return spaceship[1] > 9}).map((spaceship) => {return spaceship[0]})

//coupling platform is the index plus one
let firstPendantHitch = hitchedSpaceships.findIndex((spaceship) => spaceship[2] == false) + 1

let highlightingName = hitchedSpaceships.map((name) => name[0].toUpperCase())

function printer(mostPopulous, firstPendantHitch, names) {
    alert(`More than 9 passenger: ${mostPopulous}\nFirst pendant hitch: ${firstPendantHitch}\nSpaceships: ${names}`)
}

printer(moreThan9, firstPendantHitch, highlightingName)