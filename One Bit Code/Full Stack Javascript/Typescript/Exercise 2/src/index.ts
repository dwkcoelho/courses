type PlanetSituation = 'inhabited' | 'habitable' | 'uninhabitable' | 'unexplored'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation,
  satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name:string, coordinates: PlanetCoordinates, situation:PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`The planet ${name} was registred!`)
}

function findPlanet(name:string){
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`The planet situation from ${planet.name} was updated to ${situation}`)
} 

function addSatellite(name:string, planet: Planet) {
    planet.satellites.push(name)

    alert(`The satellite ${name} was added to ${planet.name}`)
}

function removeSatellite(name:string, planet: Planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`The satellite ${name} was removed from ${planet.name}`)
}