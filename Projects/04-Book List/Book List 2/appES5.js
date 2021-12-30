// ES5 CLASS BASED OOP VERSION OF THE BOOK LIST WEB APP

// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() { }   // empty for now, we'll add everything later to the prototype

// UI CLASS METHODS (ADDED VIA PROTOTYPE)
// UI - Add book
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
}

// UI - Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', 
  function(event) {
    // get input data from form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Instantiate a Book object
    const book = new Book(title, author, isbn);

    // Instantiate a UI object
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    event.preventDefault();
  }
);

