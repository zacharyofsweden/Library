const myLibrary = [];

function Book(title, author, pageCount, Isread, shown) {
    //The Construktor
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.Isread = Isread
    this.shown = shown
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("Hobbit", "JR Tolken", "222", "true", "true");

addBookToLibrary(theHobbit)

function bookForm() {
    //Basic form container
    const container = document.querySelector(".container");
    const Background = document.createElement("div");
    Background.classList.add("formBackground")

    //Inputs


    //adds all of it to main node
    container.appendChild(Background)

}
bookForm()

myLibrary.forEach(displayBookShelf)

function displayBookShelf(book) {
    console.log(book)

}