// STORAGE: LOCAL VS SESSION
// LOCAL = LONG TERM STORAGE SAVED WITH BROWSER DATA
// SESSION = SHORT TERM WHILE BROWSER HAS NOT BEEN REFRESHED OR NAVIGATED TO A NEW PAGE

// SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// SET SESSION STORAGE ITEM
// sessionStorage.setItem('name', 'Beth');

// REMOVE FROM STORAGE
// localStorage.removeItem('name');

// GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // CLEAR LOCAL STORAGE
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));  // need to use JSON.parse to convert string into array

tasks.forEach(function(task){
  console.log(task);
});