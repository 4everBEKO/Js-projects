"use strict"
//buttons
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// dice image
const diceImg = document.querySelector('.dice')
diceImg.style.display = 'none'

// varaibles
let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = true

const switchPlayer = () => {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore    
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}

// random roll
btnRoll.addEventListener('click', () => {
    if(gameOver) {
        const random = Math.floor(Math.random() * 6 + 1)
        diceImg.style.display = 'block'
        diceImg.src = `images/dice-${random}.png`
        
        if(random !== 1) {
            currentScore += random
            document.getElementById(`current--${activePlayer}`).textContent = currentScore    
        } else {
            switchPlayer()
        }
    }
})    

// holdBtn
btnHold.addEventListener('click', () => {
    if(gameOver) {
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = currentScore
        
        if(score[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            gameOver = false
        } else {
            switchPlayer()
        }
    }
})

// newGame
btnNew.addEventListener('click', () => {
    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    gameOver = true
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0
    document.getElementById(`score--0`).textContent = 0
    document.getElementById(`score--1`).textContent = 0
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--active')
    document.querySelector(`.player--0`).classList.add('player--active')
})