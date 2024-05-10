function simpleArithmeticAverage(...numbers) {
    return numbers.reduce((accum, number) => accum + number,  0) / numbers.length
}

console.log(simpleArithmeticAverage(10, 10, 10))

// 

function weightedArithmeticAverage(...entries) {
   const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
   const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
   return sum / weightSum
}

console.log(weightedArithmeticAverage(
    { number: 9, weight: 3},
    { number: 7},
    { number: 10, weight: 1}
))

//

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return simpleArithmeticAverage(firstMedian, secondMedian)
}

console.log(median(2, 5, 6, 4))

//

const mode = (...numbers) => {
    const quantities = numbers.map(number => [
        number, 
        numbers.filter(num => number === num).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(mode(1, 1, 2, 3, 4, 4, 4, 4, 5, 6))