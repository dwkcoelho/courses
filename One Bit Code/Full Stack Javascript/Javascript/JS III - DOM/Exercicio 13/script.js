const root = document.querySelector(':root')
const ok = document.getElementById('ok')
const restart = document.getElementById('restart')
const inputs = document.querySelectorAll('.input')
const body = document.querySelector('body')
const plays = []
const playersName = document.querySelectorAll('.player-name')
const playerO = document.getElementById('player-o')
const playerX = document.getElementById('player-x')
const scoreFirstPlayer = document.getElementById('firstPlayer')
const scoreSecondPlayer = document.getElementById('secondPlayer')
let control = true;
let count = 0

function switchPlayer() {
    document.body.classList.toggle('is-x')
    document.body.classList.toggle('is-o')
}

function disabled() {
    inputs.forEach(function(input){
        input.disabled = true
    })
}

function whoWon(score) {
    if(score[0].includes('0') && score[1].includes('0') && score[2].includes('0') && control === true) {
        disabled()
        control = false;
        scoreFirstPlayer.value++
        return
    }

    if(score[0].includes('1') && score[1].includes('1') && score[2].includes('1') && control === true) {
        disabled()
        control = false;
        scoreSecondPlayer.value++
        return
    }
}

function result() {
    const firstRow = plays.slice(0,3)
    const secondRow = plays.slice(3,6)
    const thirdRow = plays.slice(6,9)

    whoWon(firstRow) 
    whoWon(secondRow)
    whoWon(thirdRow)

    const firstColumn = [plays[0], plays[3], plays[6]]
    const secondColumn = [plays[1], plays[4], plays[7]]
    const thirdColumn = [plays[2], plays[5], plays[8]]

    whoWon(firstColumn)
    whoWon(secondColumn)
    whoWon(thirdColumn)

    const verticalNegative = [plays[0], plays[4], plays[8]]
    const verticalPositive = [plays[6], plays[4], plays[2]]

    whoWon(verticalNegative)
    whoWon(verticalPositive)
}

disabled()

//Get value before start the game
inputs.forEach(function(input){
    plays.push(input.dataset.value);
})
//Ok button - Start the game when players choose their names
ok.addEventListener('click', function(ev){
    ev.preventDefault()

    if(count === 0){
        playerO.classList.add('turn')
        count++
    }
    playersName.forEach(function(player) {
        if(player.value !== ''){
            player.disabled = true
            inputs.forEach(function(input){
                input.disabled = false
                input.addEventListener('click', switchPlayer)
                input.addEventListener('click', () => {
                    const field = document.getElementById(input.id)
                    if(body.className === 'is-x' && input.value === ''){
                        input.value = 'x'
                        input.dataset.value = '1'
                        plays[field.id] = '1'
                        playerX.classList.remove('turn')
                        playerO.classList.add('turn')
                     }
                    if(body.className === 'is-o' && input.value === ''){
                        input.value = 'o'
                        input.dataset.value = '0'
                        plays[field.id] = '0'
                        playerO.classList.remove('turn')
                        playerX.classList.add('turn')
                    } 
                    input.disabled = true
                    result()
               })
            })
        }
    })
})

// New round
ok.addEventListener('click', function(ev){
    ev.preventDefault()
    control = true
    plays.splice(0,9,"","","","","","","","","")
    inputs.forEach(function(input){
        input.value = ''
        input.disabled = false
        input.dataset.value = ''
    })
})

// Restart button - Clean every thing.
restart.addEventListener('click', function(ev){
    playersName.forEach(function(player){
        player.value = ""
        player.disabled = false
    })

    inputs.forEach(function(input){
        input.value = ''
    })
    count = 0
    playerO.classList.remove('turn')
    playerX.classList.remove('turn')
    scoreFirstPlayer.value = 0
    scoreSecondPlayer.value = 0
})

// Theme Switcher
document.getElementById('light').addEventListener('click', function() {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
})

document.getElementById('dark').addEventListener('click', function() {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
})


