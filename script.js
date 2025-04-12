//Recuperar elementos do DOM
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const filterButtons = document.querySelectorAll('.filters button')

//Evento para adicionar uma tarefa na lista
taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskText = taskInput.value

    if (taskText !== '') {
        addTask(taskText)
        taskInput.value = ''
    }
})

//Eventos botões de filtro
filterButtons.forEach((btn) =>
    btn.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'))
        btn.classList.add('active')

        const currentFilter = btn.dataset.filter
        filterTasks(currentFilter)
    })
)

//Adicionar e excluir lista de forma dinâmica
function addTask(text, completed = false) {
    const taskItem = document.createElement('li')
    taskItem.className = 'task-item'

    if (completed) {
        taskItem.classList.add('completed')
    }

    taskItem.innerHTML = `
    <label class="checkbox-wrapper">
        <input type="checkbox" class="completed-checkbox" ${
            completed ? 'checked' : ''
        } />
        <span class="task-text">${text}</span>
    </label>
    <button class="delete-button">Deletar</button>
    `

    taskItem
        .querySelector('.completed-checkbox')
        .addEventListener('change', function () {
            taskItem.classList.toggle('completed')
        })

    taskItem
        .querySelector('.delete-button')
        .addEventListener('click', function () {
            taskItem.remove()
        })

    taskList.appendChild(taskItem)
}

function filterTasks(filter) {
    const tasks = taskList.querySelectorAll('li')
    tasks.forEach((task) => {
        const isCompleted = task.classList.contains('completed')

        switch (filter) {
            case 'all':
                task.style.display = 'flex'
                break
            case 'on_hold':
                task.style.display = isCompleted ? 'none' : 'flex'
                break
            case 'completed':
                task.style.display = isCompleted ? 'flex' : 'none'
                break
        }
    })
}
