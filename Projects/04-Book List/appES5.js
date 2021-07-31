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
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', 
  function(e) {
    // get values from form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiate a new book
    const book = new Book(title, author, isbn);

    // instantiate UI for table
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // clear form fields
    ui.clearFields();

    e.preventDefault();
});
