const userLibrary = [];

function Book(title, author, pages, read) {
    //general constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

let theHobbit = new Book('the hobbit', 'j.r.r. tolkien', '290 pages', 'already read')
let bookTwo = new Book('book two', 'Nobody', '195 pages', 'has not been read yet');
let bookThree = new Book('book three', 'anonymous', '2,000 pages', 'has not been read yet');

let addBookButton = document.querySelector('.footer');
let cardContainer = document.querySelector('.container'); 

function addBookToLibrary() {
    //do stuff here
    addBookButton.addEventListener('click', () => {
        let card = document.createElement('div');
            card.setAttribute('class', 'card');
        let titleInput = document.createElement('input');
            titleInput.setAttribute('class', 'title-input');
            titleInput.setAttribute('type', 'text');
            titleInput.required = true;
        let titleLabelline = document.createElement('div');
            titleLabelline.setAttribute('class', 'labelline');
            titleLabelline.textContent = 'book title'
        cardContainer.appendChild(card);
        card.appendChild(titleInput);
        card.appendChild(titleLabelline);
    })
}

addBookToLibrary();