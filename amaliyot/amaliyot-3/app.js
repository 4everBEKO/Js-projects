const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

let editItemId

//check
let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

if(todos.length) showTodos()
    
//setTodos to localStorage
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}

//show Todos
function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list'))
    listGroupTodo.innerHTML = ''
    
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li ondblclick="setCompleted(${i})" class="list-group-item d-flex justify-content-between 
        ${item.completed == true ? 'complated' : ''}">
        ${item.text}
        <div class="todo-icons">
        <span class="opacity-50 me-2">${getTime()}</span>
        <img onclick=(editTodo(${i})) src="images/edit-2-line.svg" alt="edit icon" width="25" height="25">
        <img onclick=(deleteTodo(${i})) src="images/delete-bin-2-line.svg" alt="delete icon" width="25" height="25">
        </div>
        </li>
        `
    });
}

//showErrorMassage
function showErrorMassage(where, message) {
    document.getElementById(`${where}`).textContent = message
    
    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 2500);
}

//get Todos
formCreate.addEventListener('submit', e => {
    e.preventDefault()
    
    const todoText = formCreate['input-create'].value.trim()
    formCreate.reset()
    
    if(todoText.length) {
        todos.push({ text: todoText, time: getTime(), completed: false })
        setTodos()
        showTodos()
    } else {
        showErrorMassage('message-create', 'Please, enter some text...')
    }
})


//time
function getTime() {
    const now = new Date()
    
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    const month = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth()
    
    const year = now.getFullYear()
    const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds() 
    
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
        'December'
    ]
    
    const month_title = now.getMonth()
    
    fullDay.textContent = `${day} ${months[month_title]}, ${year}`
    hourEl.textContent = hour
    minuteEl.textContent = minute
    secondEl.textContent = second
    
    return `${hour}:${minute}, ${day}.${month}.${year}`
}

setTimeout(setInt, 1500)

function setInt() {
    setInterval(getTime, 1000)
}

//deleteTodo
function deleteTodo(id) {
    const deleteTodos = todos.filter((item, i) => {
        return i !== id
    })
    
    todos = deleteTodos
    setTodos()
    showTodos()
}

//setCompleted
function setCompleted(id) {
    const completedTodos = todos.map((item, i) => {
        if(id == i) {
            return {...item, completed: item.completed == true ? false : true}
        } else {
            return {...item}
        }
    })
    todos = completedTodos
    setTodos()
    showTodos()
    
}

// edit Form
formEdit.addEventListener('submit', e => {
    e.preventDefault()
    
    const todoText = formEdit['input-edit'].value.trim()
    formEdit.reset()
    
    if(todoText.length) {
        todos.splice(editItemId, 1, { text: todoText, time: getTime(), completed: false })
        setTodos()
        showTodos()
        close()
    } else {
        showErrorMassage('message-edit', 'Please, enter some text...')
    }
})

// editTodo
function editTodo(id) {
    open()
}

overlay.addEventListener('click', close)
closeEl.addEventListener('click', close)

function open() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function close() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}