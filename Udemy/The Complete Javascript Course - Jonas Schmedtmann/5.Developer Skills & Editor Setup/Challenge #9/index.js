// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems:
// - Build a phrase with the values of the array
// - Transform the phrase in a string
// - Concatenate the phrases in one string value

function printForecast(temps) {
    let completePhrase ='...'
    for(i = 0; i < temps.length; i++){
        completePhrase += ` ${temps[i]}C in ${i + 1} day(s) ...`
    }
    console.log(completePhrase)
}

const firstDataTest = [17, 21, 23]
const secondDataTest = [12, 5, -5, 0, 4]
printForecast(firstDataTest)
printForecast(secondDataTest)
