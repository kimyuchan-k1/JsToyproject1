const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = document.querySelector('#todo-form input');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
}

//엔터 혹은 제출 : submit

toDoForm.addEventListener('submit', handleToDoSubmit);
