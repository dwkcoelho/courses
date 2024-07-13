'use strict';

const decreaseScore = (decrease) => {
    if(score <= 0) message.textContent = '💥 You lost the game!'
    if(score > 0) {
        message.textContent = decrease
        score--
        document.querySelector('.score').textContent = score
    }
}

const scoreMessage = (msg) =>  message.textContent = msg

const message = document.querySelector('.message')
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const checkBtn = document.querySelector('.check')
checkBtn.addEventListener('click', () => {
    const numberToCheck = Number(document.querySelector('.guess').value)

    if(!numberToCheck) scoreMessage('⛔ No Number!')
    if(numberToCheck === secretNumber) {
        scoreMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.number').style.width = '30rem'
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } 
    if(numberToCheck > secretNumber && numberToCheck) decreaseScore('📈 Too High!')
    if(numberToCheck < secretNumber && numberToCheck) decreaseScore('📉 Too Low!')
})

const againBtn = document.querySelector('.again')
againBtn.addEventListener('click', () => {
    scoreMessage('Start guessing...')
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
})