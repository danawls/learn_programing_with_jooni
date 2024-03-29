const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const body = document.querySelector("body");
const toDoButton = document.querySelector("#todo-button");
const toDoDiv = document.querySelector("#to-hide-div");
const deleteButton = document.querySelector("#todo-all-delete-button");
const dreDiv = document.querySelector("#dre");
const allTodos = document.querySelector("#todo-list li");
const toDoBox = document.querySelector("#todo-list");

const TODO_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const toDeleteLi = event.target.parentElement;
  toDeleteLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDeleteLi.id));
  saveToDos();
}

function handleToDoCliked() {
  toDoDiv.classList.toggle("hide");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("font");
  const button = document.createElement("button");
  button.innerText = "✔️";
  button.classList.add("button-design");
  button.classList.add("todo-delete-button");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function firstStepOfDeleteAllTodos() {
  if (localStorage.getItem(TODO_KEY) == null) {
    alert("There no todos to delete.");
  } else {
    deleteTodoAll();
  }
}

function deleteTodoAll() {
  if (confirm("Do you realy want to delete all todos?") == true) {
    removeAllchild(toDoBox);
  }
}

function removeAllchild(div) {
  localStorage.removeItem(TODO_KEY);
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

toDoButton.addEventListener("click", handleToDoCliked);

toDoButton.addEventListener("click", secondCliked, { once: true });

deleteButton.addEventListener("click", firstStepOfDeleteAllTodos);

const savedToDos = localStorage.getItem(TODO_KEY);

function secondCliked() {
  if (localStorage.getItem(TODO_KEY) !== null) {
    const parsedToDos = JSON.parse(localStorage.getItem(TODO_KEY));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}
