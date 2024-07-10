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
        let titleEntryArea = document.createElement('div');
            titleEntryArea.setAttribute('class', 'entry-area');
        let authorEntryArea = document.createElement('div');
            authorEntryArea.setAttribute('class', 'entry-area');
        let titleInput = document.createElement('input');
            titleInput.setAttribute('class', 'title-input');
            titleInput.setAttribute('type', 'text');
            titleInput.required = true;
        let titleLabelline = document.createElement('div');
            titleLabelline.setAttribute('class', 'labelline');
            titleLabelline.textContent = 'book title'
        let authorInput = document.createElement('input');
            authorInput.setAttribute('class', 'title-input');
            authorInput.setAttribute('type', 'text');
            authorInput.required = true;
        let authorLabelline = document.createElement('div');
            authorLabelline.setAttribute('class', 'labelline');
            authorLabelline.textContent = 'author name'
        cardContainer.appendChild(card);
        card.appendChild(titleEntryArea)
        titleEntryArea.appendChild(titleInput);
        titleEntryArea.appendChild(titleLabelline);
        card.appendChild(authorEntryArea);
        authorEntryArea.appendChild(authorInput);
        authorEntryArea.appendChild(authorLabelline);
    })
}

addBookToLibrary();