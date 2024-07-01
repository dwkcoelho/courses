function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry(' Portugal', 10, 'Lisbon\n');
const descGermany = describeCountry('Germany', 83, 'Berlin\n');
const descFinland = describeCountry('Finland', 6, 'Helsinki\n');

console.log(descPortugal, descGermany, descFinland);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
 
const percentageOfWorld2 = function (population) {
   return (population / 7900) * 100;
};
 
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
 
console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

const describePopulation = function(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `\n${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};
  
  describePopulation('Portugal', 10);
  describePopulation('China', 1441);
  describePopulation('USA', 332);