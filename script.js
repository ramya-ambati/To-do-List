const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");

function addTodo(task) 
{
    const listItem = document.createElement("li");
  
  listItem.textContent = task;

  todoList.appendChild(listItem);
} 

addButton.addEventListener("click", function()

 {
  
const task = todoInput.value;

  if (task) {
   
    addTodo(task);

    todoInput.value = "";
  }
});
