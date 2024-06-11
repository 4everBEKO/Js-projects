"use strict"

const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const hours = document.getElementById('hour')
const minutes = document.getElementById('minut')
const seconds = document.getElementById('second')

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

setTimeout(() => {
    setTime()
}, 1000)

function setTime() {
    setInterval(() => {
        let now = new Date()
        
        day.textContent = now.getDay() < 10 ? '0' + now.getDay() : now.getDay()
        month.textContent = months[now.getMonth()] + ','
        year.textContent = now.getFullYear() < 10 ? '0' + now.getFullYear() : now.getFullYear()
        hours.textContent = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
        minutes.textContent = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        seconds.textContent = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    })
}