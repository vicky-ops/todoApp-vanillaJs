//To-do app implemented in Vanilla js
//Features State Management, Data Binding , Events, Lifecycle
const form=document.querySelector("form");
const input=document.querySelector("input");
const todoList=document.getElementById("todos");

//Side Effects / lifecycle
const existingTodos=JSON.parse(localStorage.getItem("todos"));
const todoData= existingTodos || [];
// console.log(isArray(existingTodos) )
todoData.forEach(todo=>{
    addTodo(todo);
});

//Data Binding
function addTodo(todoText){
    todoData.push(todoText);//Data
    const li=document.createElement("li")
    li.innerHTML=todoText//Ui
    todoList.appendChild(li);
    localStorage.setItem('todos',JSON.stringify(todoData));
}

//Events
form.onsubmit=(event)=>{
    event.preventDefault();
    addTodo(input.value);
}