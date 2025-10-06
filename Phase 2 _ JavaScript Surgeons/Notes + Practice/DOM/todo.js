const addButton = document.getElementById("add-button")
const todoInput = document.getElementById("todo-input")
const taskContainer = document.getElementById("todo-task-container")

const addEvent = () => {
    if(!todoInput.value){
        alert("Enter a valid task.")
    } else { 
    const todo = todoInput.value
    const li = document.createElement('li')
    li.innerText = todo;

    const delButton = document.createElement('button')
    delButton.innerText = "X";

    li.appendChild(delButton)
    taskContainer.appendChild(li)

  

    delButton.addEventListener('click', () => {
        li.remove()
    })
    
     todoInput.value = ''
    }
}

addButton.addEventListener('click', addEvent)
todoInput.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        event.preventDefault(); 
        addEvent();
    }
})