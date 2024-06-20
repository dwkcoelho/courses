// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. 
// The average score for Dolphins should be assigned to the scoreDolphins variable, 
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

function averageScore ( ...value ) {
    const sumValue = value.reduce((acc, score) => acc + score, 0)
    return sumValue / value.length
}

const scoreDolphins = Number(averageScore(100, 108, 100).toFixed(2))
const scoreKoalas = Number(averageScore(100 , 108, 100).toFixed(2))

if(scoreDolphins === scoreKoalas && scoreDolphins > 100 && scoreKoalas > 100) {
    console.log("Both win the trophy")
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy")
} else {
    console.log("No team wins the trophy")
}