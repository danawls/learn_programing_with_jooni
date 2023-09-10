const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const body = document.querySelector("body");
const toDoButton = document.querySelector("#todo-button");
const toDoDiv = document.querySelector("#to-hide-div");
const deleteButton = document.querySelector("#todo-all-delete-button");

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

toDoForm.addEventListener("submit", handleToDoSubmit);

toDoButton.addEventListener("click", handleToDoCliked);
toDoButton.addEventListener("click", secondCliked, { once: true });
deleteButton.addEventListener("click", allDelete);

deleteButton.addEventListener("click", deleteall);

const savedToDos = localStorage.getItem(TODO_KEY);

function handleToDoCliked() {
  toDoDiv.classList.toggle("hide");
}

function secondCliked() {
  if (localStorage.getItem(TODO_KEY) !== null) {
    const parsedToDos = JSON.parse(localStorage.getItem(TODO_KEY));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}
