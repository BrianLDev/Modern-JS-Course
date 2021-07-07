// Define Global UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Function to load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
}

// Function to Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert("Task input is empty. Type in the task you want to complete.");
  } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content'; // secondary-content allows it to be placed to the right of an object in materialize
    link.innerHTML = '<i class="fa fa-remove"></i>';  // font awesome remove icon
    // Append the link
    li.appendChild(link);

    // Clear the input text
    taskInput.value = '';

    // Append li to the ul (.collection = taskList)
    taskList.appendChild(li);

    e.preventDefault(); // stops default web behavior
  }
}

// Function to Remove Task
function removeTask(e) {
  // make sure the click is on the X
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      // remove the full li (parent of parent of target)
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Function to Clear Tasks
function clearTasks(e) {
  if (confirm('Are you sure? This will delete **ALL** tasks.')) {
    // remove all child nodes
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}