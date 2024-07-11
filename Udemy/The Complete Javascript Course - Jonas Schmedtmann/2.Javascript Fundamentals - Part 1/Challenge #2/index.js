// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

function bmi (mass, height) {
    return (mass / (height ** 2)).toFixed(2)
}

const markBmi = bmi(78, 1.69) 
const johnBmi = bmi(92, 1.95)
const willianBmi = bmi(95, 1.88)
const paulBmi = bmi(85, 1.76)

if(markBmi > johnBmi && markBmi > willianBmi && markBmi > paulBmi){
    console.log(`Mark's BMI ${markBmi} is higher among the other guys`)
} else if(johnBmi > markBmi && johnBmi > willianBmi && johnBmi > paulBmi){
    console.log(`John's BMI ${johnBmi} is higher among the other guys`)
} else if(willianBmi > markBmi && willianBmi > johnBmi && willianBmi > paulBmi) {
    console.log(`Willian's BMI ${willianBmi} is higher among the other guys`)
} else {
    console.log(`Paul's BMI ${paulBmi} is higher among the other guys`)
}
