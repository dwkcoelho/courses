const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat)

function birthData(birth) {
    const birthData = dayjs(birth, "DD/MM/YYYY")
    const currentData = dayjs()
    const actualAge = currentData.diff(birthData, 'year')
    console.log(`Your age in ${currentData.format("DD/MM/YYYY")} is ${actualAge}`)

    const nextBirth = birthData.add((actualAge + 1), 'year')
    const daysToGo = nextBirth.diff(currentData, 'day')
    console.log(`Your next birthday is in ${nextBirth.format("DD/MM/YYYY")}, ${daysToGo} days to go.`)

}


module.exports = birthData
