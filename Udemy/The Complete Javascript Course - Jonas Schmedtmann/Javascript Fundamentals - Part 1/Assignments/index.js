// Assignment 1
const continent = 'South America'
const country = 'Brazil'
let populationInMillions = 220
// Assignment 2 
let language;
const isIsland = false
console.log(continent, country, populationInMillions, language, isIsland)
// Assignment 3
language = 'Portuguese'
// Observe what happens: isIsland = true
// Assignment 4
console.log(populationInMillions / 2)
populationInMillions++
console.log(populationInMillions)
console.log(populationInMillions > 6)
console.log(populationInMillions < 33)

let description = country + ' is in ' + continent + ', and it`s ' + populationInMillions + ' million people speak ' + language

console.log(description)
// Assignment 5
description = `${country} is in ${continent}, and it's ${populationInMillions} million people speak ${language}`
console.log(description)
// Assignment 6 and 10
function averagePopulation(populationInMillions, country) {
    const aboveAverage = `${country}'s population is above average`;
    const belowAverage = `${country}'s population is ${33 - populationInMillions} million below average`;
    const result = populationInMillions > 33 ? aboveAverage : belowAverage;
    
    return console.log(result)
}
averagePopulation(populationInMillions, country)
averagePopulation(13, country)
averagePopulation(130, country)
// Assignment 7
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// Assignment 8
const numNeighbours = 1
  
  if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
// Assignment 9
if (language === 'english' && population < 50 && isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
// Assignment 10
switch (language) {
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!')
      break;
    case 'spanish':
      console.log('2nd place in number of native speakers')
      break;
    case 'english':
      console.log('3rd place')
      break;
    case 'hindi':
      console.log('Number 4')
      break;
    case 'arabic':
      console.log('5th most spoken language')
      break;
    default:
      console.log('Great language too :D')
}