// inputs //
let titleInput = document.getElementById("title-form");
let authorInput = document.getElementById("author-form");
let pagesInput = document.getElementById("pages-form");
// let checkNo = document.getElementById("no");
// let checkYes = document.getElementById("yes");
let selectMenu = document.getElementById("select-menu");
let selectedValue;

let tableBody = document.getElementById("table-body");
let bookTable = document.getElementById("bookTable");
let inputForm = document.querySelector(".book-form");

// buttons //
let addBook = document.querySelector(".add-book");
let submitButton = document.querySelector(".submit");
let cancelButton = document.querySelector(".cancel");

tableBody.innerHTML = "";

addBook.addEventListener("click", toggleStyles);
cancelButton.addEventListener("click", toggleStyles);

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

let myLibrary = [
]

selectMenu.addEventListener("change", function () {
  selectedValue = selectMenu.value;
})

function addBookToLibrary() {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let status = selectedValue;
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

function toggleStyles() {
  inputForm.classList.toggle("hidden");
  bookTable.classList.toggle("hidden");
  addBook.classList.toggle("hidden");
}

function displayBooks() {

  addBookToLibrary();

  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let row = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    let authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    let pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell)

    let statusCell = document.createElement("td")
    statusCell.textContent = book.status;
    row.appendChild(statusCell);

    tableBody.appendChild(row);

  }
}

submitButton.addEventListener("click", displayBooks);
submitButton.addEventListener("click", toggleStyles);