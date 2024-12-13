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



myLibrary.forEach(displayBookShelf)

function displayBookShelf(book) {
    console.log(book)

}