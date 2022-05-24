const card = document.querySelector('.cardSide');
const cardContent = document.querySelector('.cardSide h3');
const cardID = document.querySelector('span.cardId');
const numOfCards = document.querySelector('span.numOfCards');
const flipBtn = document.querySelector('.flip');
const deleteBtn = document.querySelector('.del');

const lSCards = JSON.parse(localStorage.getItem('cards')) || [];
let count = 0;
let count2 = 0;
let isFliped = false;

let frontSideValue = '';
let backSideValue = '';

numOfCards.textContent = lSCards.length;

card.addEventListener('click', () => {
    if (lSCards.length === 0) {
        cardContent.textContent = 'No Flashcads';
        return;
    } else {
        console.log(lSCards);
        frontSideValue = lSCards[count].frontSide;
        backSideValue = lSCards[count].backSide;
        cardContent.textContent = frontSideValue;
        cardID.textContent = count + 1;
        
        count2 = count;
    };
    count++;
    
    if (count === lSCards.length) {
        count = 0;
    };        
    
});

flipBtn.addEventListener('click', () => {
    isFliped = !isFliped;
    frontSideValue = lSCards[count2].frontSide;
    backSideValue = lSCards[count2].backSide;
    cardContent.textContent = isFliped? backSideValue : frontSideValue;
});

deleteBtn.addEventListener('click', () => {
    lSCards.splice([count2], 1);
    localStorage.setItem('cards', JSON.stringify(lSCards));
    location.reload();
    count = 0;
});