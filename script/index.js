const userLibrary = [];

function Book(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
};

let addBookButton = document.querySelector('.footer');
let cardContainer = document.querySelector('.container'); 
let card;
let submitButtonArea;
let titleInput;
let authorInput;
let pagesInput;
let genreInput;
let titleEntryArea;
let authorEntryArea
let pagesEntryArea;
let genreEntryArea;
let emptyCardCounter = 0;

function displayInput() {
    addBookButton.addEventListener('click', () => {
    if (emptyCardCounter < 1) {
        emptyCardCounter = 1;
        card = document.createElement('div');
            card.setAttribute('class', 'card');

        titleEntryArea = document.createElement('div');
            titleEntryArea.setAttribute('class', 'entry-area');
        authorEntryArea = document.createElement('div');
            authorEntryArea.setAttribute('class', 'entry-area');
        pagesEntryArea = document.createElement('div');
            pagesEntryArea.setAttribute('class', 'entry-area')
        genreEntryArea = document.createElement('div');
            genreEntryArea.setAttribute('class', 'entry-area');

        titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.required = true;
        let titleLabelline = document.createElement('div');
            titleLabelline.setAttribute('class', 'labelline');
            titleLabelline.textContent = 'book title'

        authorInput = document.createElement('input');
            authorInput.setAttribute('type', 'text');
            authorInput.required = true;
        let authorLabelline = document.createElement('div');
            authorLabelline.setAttribute('class', 'labelline');
            authorLabelline.textContent = 'author name'

        pagesInput = document.createElement('input');
            pagesInput.setAttribute('type', 'text');
            pagesInput.required = true;
        let pagesLabelline = document.createElement('div');
            pagesLabelline.setAttribute('class', 'labelline');
            pagesLabelline.textContent = 'number of pages'

        genreInput = document.createElement('select');
            let defaultInput = document.createElement('option');
            let romanceInput = document.createElement('option');
                romanceInput.textContent = 'romance';
            let thrillerInput = document.createElement('option');
                thrillerInput.textContent = 'thriller';
            let fantasyInput = document.createElement('option');
                fantasyInput.textContent = 'fantasy';
            let scifiInput = document.createElement('option');
                scifiInput.textContent = 'sci-fi';
            let otherInput = document.createElement('option');
                otherInput.textContent = 'other';
        let genreLabelline = document.createElement('div');
            genreLabelline.setAttribute('class', 'labelline');
            genreLabelline.textContent = 'genre';

        submitButtonArea = document.createElement('div');
            submitButtonArea.setAttribute('id', 'submit-button');
            submitButtonArea.textContent = 'submit';
            submitButtonArea.addEventListener('click', () => {
                getObjects();
                removeInputElements();
            })

        cardContainer.appendChild(card);
            card.appendChild(titleEntryArea)
                titleEntryArea.appendChild(titleInput);
                titleEntryArea.appendChild(titleLabelline);
            card.appendChild(authorEntryArea);
                authorEntryArea.appendChild(authorInput);
                authorEntryArea.appendChild(authorLabelline);
            card.appendChild(pagesEntryArea);
                pagesEntryArea.appendChild(pagesInput);
                pagesEntryArea.appendChild(pagesLabelline);
            card.appendChild(genreEntryArea);
                genreEntryArea.appendChild(genreInput);
                genreEntryArea.appendChild(genreLabelline);
                genreInput.appendChild(defaultInput);
                genreInput.appendChild(romanceInput);
                genreInput.appendChild(thrillerInput);
                genreInput.appendChild(fantasyInput);
                genreInput.appendChild(scifiInput);
                genreInput.appendChild(otherInput);
            card.appendChild(submitButtonArea);
    }});
};

let getObjects = () => {
    const libraryBooks = new Book(titleInput.value, authorInput.value, pagesInput.value, genreInput.value);
    console.log(libraryBooks);
}


let removeInputElements = () => {
    card.removeChild(titleEntryArea);
    card.removeChild(authorEntryArea);
    card.removeChild(pagesEntryArea);
    card.removeChild(genreEntryArea);
    card.removeChild(submitButtonArea);
    emptyCardCounter = 0;
}

displayInput();

let theHobbit = new Book('the hobbit', 'j.r.r. tolkien', '290 pages', 'already read')
let bookTwo = new Book('book two', 'Nobody', '195 pages', 'has not been read yet');
let bookThree = new Book('book three', 'anonymous', '2,000 pages', 'has not been read yet');