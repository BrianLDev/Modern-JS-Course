// CREATE ELEMENT
const li  = document.createElement('li');

// ADD CLASS
li.className = 'collection-item';

// ADD ID
li.id = 'new-item';

// ADD ATTRIBUTE
li.setAttribute('title', 'New Item');

// CREATE TEXT NODE AND APPEND
li.appendChild(document.createTextNode('Hello World'));

// CREATE NEW LINK ELEMENT
const link = document.createElement('a');
// ADD CLASSES
link.className = 'delete-item secondary-content';
// ADD ICON HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// APPEND LINK INTO LI
li.appendChild(link);

// APPEND LI AS CHILD TO UL
document.querySelector('ul.collection').appendChild(li);

console.log(li);