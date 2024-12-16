let bookCount = 0;
let bookDisplayCount = 0;

const myLibrary = [];

function Book(title, author, pageCount) {
    //The Construktor
    this.title = title
    this.author = author
    this.pageCount = pageCount
}


function bookForm() {

    //Basic form container
    const modal = document.querySelector(".modalForm")
    const openModal = document.querySelector(".addButton")
    const closeModal = document.querySelector(".modalClose")
    const submitModal = document.querySelector(".submitButton")
    const authorInput = document.querySelector(".formAuthor")
    const titleInput = document.querySelector(".formTitle")
    const pageCountInput = document.querySelector(".formPageCount")


    //Inputs
    openModal.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal.addEventListener("click", () => {
        modal.close();
    })

    submitModal.addEventListener("click", (e) => {
        e.preventDefault();
        handelSubmit()
    })


    //Submit logic 
    //when i submit gather all of their input and add that in a function 
    //add it to library 
    function handelSubmit() {
        const testBook = new Book(titleInput.value, authorInput.value, pageCountInput.value)
        addBookToLibrary(testBook)
        modal.close();
    }


}


const theHobbit = new Book("Hobbit", "JR Tolken", "222");

addBookToLibrary(theHobbit)


function addBookToLibrary(book) {
    myLibrary.push(book);
    bookCount++;
    displayBookShelf(myLibrary[myLibrary.length - 1])
    deleteBook()
}


function deleteBook() {
    //quarry what book got it's button clicked 
    //use the data link and remove the book in the array. 
    //Remove all the dom elements
    const nodes = document.querySelectorAll(".deleteBookButton")
    let bookListener = nodes[nodes.length - 1]
    bookListener.addEventListener("click", (e) => {

        myLibrary.splice(e.target.dataset.bookId, 1)
        bookListener.parentElement.remove()

    })


}



function displayBookShelf(book) {
    console.log(myLibrary.length)

    //Increase bookDisplay count to keep track on all the books we track

    console.log(book)
    //Gets container to contain the books 
    const shelf = document.querySelector(".ShelfContainer")

    //Create a new book div
    const newBook = document.createElement("div")
    newBook.classList.add("bookTest");


    //Create new paragraph for all the info
    const titleInfo = document.createElement("p")
    titleInfo.classList.add("titleStyle")
    const authorInfo = document.createElement("p")
    authorInfo.classList.add("authorStyle")
    const pageCountInfo = document.createElement("p")
    pageCountInfo.classList.add("pagesCountStyle")
    const deleteBookButton = document.createElement("button")
    deleteBookButton.classList.add("deleteBookButton")

    //displays the book attributes  
    titleInfo.innerHTML = (book.title)
    authorInfo.innerHTML = (book.author)
    pageCountInfo.innerHTML = (book.pageCount)
    deleteBookButton.innerHTML = ("delete")
    deleteBookButton.dataset.bookId = myLibrary.length - 1

    //add all of this too the dom 
    newBook.appendChild(titleInfo)
    newBook.appendChild(authorInfo)
    newBook.appendChild(pageCountInfo)
    newBook.appendChild(deleteBookButton)
    shelf.appendChild(newBook)
    bookDisplayCount++;




}
bookForm()
