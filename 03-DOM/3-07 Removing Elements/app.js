// REPLACE ELEMENT

// CREATE ELEMENT
const newHeading = document.createElement('h2');
// ADD ID
newHeading.id = 'task-title';

// NEW TEXT NODE - CHILD OF NEW ELEMENT
newHeading.appendChild(document.createTextNode('New Task List'));

// GET THE OLD HEADING
const oldHeading = document.getElementById('task-title'); // since it goes in order, this will be the 1st one
// GET THE PARENT OF OLD HEADING
const cardAction = document.querySelector('.card-action');

// REPLACE
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// REMOVE LIST ITEM
lis[0].remove();

// REMOVE CHILD ELEMENT
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// CLASSES
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title'); // .hasAttribute checks to see if attribute has been set
link.removeAttribute('title');
val = link;

console.log(val);

