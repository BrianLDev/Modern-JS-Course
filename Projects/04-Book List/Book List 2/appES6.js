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

// EVENT LISTENERS
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
      ui.showAlert("Book added!", 'success');

      // Add book to list
      ui.addBookToList(book);

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

    ui.showAlert('Book Removed!', 'success');

    event.preventDefault();
  }
)