// ES5 VERSION OF JS - CLASSES/FUNCTIONS

// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() {}  // nothing passed in, everything will go into the prototype
// UI FUNCTIONS ADDED VIA PROTOTYPE
// UI - add book
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // create table row element
  const row = document.createElement('tr');
  // insert cols into table row
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
}
// UI - show alert
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');  // create div
  div.className = `alert ${className}`; // add classes
  div.appendChild(document.createTextNode(message));  // add text
  const container = document.querySelector('.container');  // get parent
  const form = document.querySelector('#book-form');  // get form
  container.insertBefore(div, form);  // insert new div before the form
  // hide alert after 2 seconds
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 2000);
}
// UI - delete book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}
// UI - clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// EVENT LISTENERS
// EVENT LISTENER FOR ADD BOOK
document.getElementById('book-form').addEventListener('submit', 
  function(e) {
    // get values from form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const ui = new UI();  // instantiate UI for table
    // Validate input
    if (title === '' || author === '' || isbn === '') {
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      const book = new Book(title, author, isbn); // instantiate a new book
      ui.addBookToList(book); // Add book to list
      ui.clearFields(); // clear form fields
      ui.showAlert('Book added!', 'success');
    }

    e.preventDefault();
});

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();  // instantiate UI for table
  ui.deleteBook(e.target);  // delete book
  ui.showAlert('Book deleted!', 'success');

  e.preventDefault();
});