const myLibrary = [];

//Todo Make sure that my form gets subbmited to right place in code 
//Todo Make sure that i can transfer the dom to the book class like author = new Book ("sss" SSS)

function Book(title, author, pageCount) {
    //The Construktor
    this.title = title
    this.author = author
    this.pageCount = pageCount
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("Hobbit", "JR Tolken", "222");

addBookToLibrary(theHobbit)
//TODO Change it to use a modol dialog instead much easier. 
function bookForm() {
    const formArray = []
    //Basic form container
    const modal = document.querySelector(".modalForm")
    const openModal = document.querySelector(".addButton")
    const closeModal = document.querySelector(".modalClose")
    const authorInput = document.querySelector(".modalClose")
    const titleInput = document.querySelector(".modalClose")
    const pageCountInput = document.querySelector(".modalClose")


    //Submit logic 
    //when i submit gather all of their input and add that in a function 
    //Todo use an array and add all of these in the array
    //then use array method like reduce to add them all in to a new book
    //and then add it to library 
    function handelSubmit() {
        console.log("working")
        formArray.push(authorInput.value)
        formArray.push(titleInput.value)
        formArray.push(pageCountInput.value)
    }

    //Inputs
    openModal.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal.addEventListener("click", () => {
        modal.close();
    })

    closeModal.addEventListener(".submitButton", () => {
        preventDefault();
        console.log("working")
    })



}






myLibrary.forEach(displayBookShelf)

function displayBookShelf(book) {
    console.log(book)

}

bookForm()