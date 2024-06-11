"use strict"

let player1Score = 0
let player2Score = 0
let winningScore = 3
let gameOver = false

const player1Btn = document.getElementById('player1-button')
const player2Btn = document.getElementById('player2-button')
const resetBtn = document.getElementById('reset-button')
const player1Display = document.getElementById('player1-score')
const player2Display = document.getElementById('player2-score')
const winningScoreSelect = document.getElementById('winning-score')


player1Btn.addEventListener('click', () => {
    if (!gameOver) {
        player1Score++;
        if(player1Score === winningScore) {
            gameOver = true;
            player1Display.classList.add('winner')
            player2Display.classList.add('loser')
        }
        player1Display.textContent = player1Score
    }
})

player2Btn.addEventListener('click', () => {
    if (!gameOver) {
        player2Score++;
        if(player2Score === winningScore) {
            gameOver = true;
            player2Display.classList.add('winner')
            player1Display.classList.add('loser')
        }
        player2Display.textContent = player2Score
    }
})

resetBtn.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value)
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    gameOver = false
    player1Display.textContent = player1Score
    player2Display.textContent = player2Score
    player1Display.classList.remove('winner', 'loser')
    player2Display.classList.remove('winner', 'loser')
}

