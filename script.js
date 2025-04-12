//Recuperar elementos do DOM
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
/* const filterButtons = document.querySelectorAll('.filters button') */

//Evento para adicionar uma tarefa na lista
taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskText = taskInput.value

    if (taskText !== '') {
        addTask(taskText)
        taskInput.value = ''
    }
})

//Adicionar lista de forma dinâmica
function addTask(text, completed = false) {
    const taskItem = document.createElement('li')
    taskItem.className = 'task-item'

    if (completed) {
        taskItem.classList.add('completed')
    }

    taskItem.innerHTML = `
    <label class="checkbox-wrapper">
        <input type="checkbox" class="completed-checkbox" />
        <span class="task-text">${text}</span>
    </label>
    <button class="delete-button">Deletar</button>
    `
    taskList.appendChild(taskItem)
}
