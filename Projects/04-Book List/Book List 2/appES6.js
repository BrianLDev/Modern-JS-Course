// ES5 OOP CLASS BASED VERSION OF THE BOOK LIST WEB APP

// CLASSES
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`; // gives div 2 classes: alert, and whatever className is
    // add text using a textNode
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // remove after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000)
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      // item we need to delete is 2 parents above the X that is clicked.
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local Storage Class
class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach(book => {
      const ui = new UI;
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Storage.getBooks();
    books.forEach( (book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1); // this deletes the book from the books array
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// EVENT LISTENERS
// DOM Load Event - load books
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

// Event Listener for add book
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

    // Validate
    if (title === '' || author === '' || isbn === '') {
      // show alert
      ui.showAlert("Please fill in all fields.", 'error');
    } else {
      // Add book to list
      ui.addBookToList(book);

      // Add to local storage
      Storage.addBook(book);

      ui.showAlert("Book added!", 'success');

      // Clear fields
      ui.clearFields();
    }

    event.preventDefault();
  }
);

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', 
  function(event) {  // need to get parent (book list)
    // Instantiate UI
    ui = new UI();

    ui.deleteBook(event.target);

    Storage.removeBook(event.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book Removed!', 'success');

    event.preventDefault();
  }
)