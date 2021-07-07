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
  // DOM Load event
  document.addEventListener('DOMContentLoaded', loadTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Function to Load Taks when DOM leaded / refreshed
function loadTasks() {
  let tasks;
  // Load task list or create new one if no task list exists
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // local storage can only hold strings so we have to parse the string
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(
      function(task) {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create textnode and append to li
        li.appendChild(document.createTextNode(task));

        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content'; // secondary-content allows it to be placed to the right of an object in materialize
        link.innerHTML = '<i class="fa fa-remove"></i>';  // font awesome remove icon
        // Append the link
        li.appendChild(link);

        // Append li to the ul (.collection = taskList)
        taskList.appendChild(li);
      }
    );
  }
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

    // Append li to the ul (.collection = taskList)
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input text
    taskInput.value = '';

    e.preventDefault(); // stops default web behavior
  }
}

// Function to store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  // Load task list or create new one if no task list exists
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // local storage can only hold strings so we have to parse the string
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // add task to array of tasks
  tasks.push(task);
  // save task list to local storage - need to convert to string with JSON.stringify
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to Remove Task
function removeTask(e) {
  // make sure the click is on the X
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      // remove the full li (parent of parent of target)
      console.log(e.target.parentElement.parentElement.textContent);
      removeTaskInLocalStorage(e.target.parentElement.parentElement.textContent);
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Function to remove task in local storage
function removeTaskInLocalStorage(task) {
  let tasks;
  // Load task list or create new one if no task list exists
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // local storage can only hold strings so we have to parse the string
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Find task in array and remove it (splice is a proper delete in JS)
  // delete tasks[tasks.indexOf(task)]; // don't use this-will leave a null element
  tasks.splice(tasks.indexOf(task), 1);

  // Save task list to local storage - need to convert to string with JSON.stringify
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to Clear Tasks
function clearTasks(e) {
  if (confirm('Are you sure? This will delete **ALL** tasks.')) {
    // remove all child nodes
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    // Clear local storage
    localStorage.clear();
    
    // Alternatively - Save empty task list to local storage
    // let tasks = [];
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// Function to Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();  // whatever is typed in to the filter
  document.querySelectorAll('.collection-item').forEach(
    function(task) {
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
}