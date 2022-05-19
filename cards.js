const card = document.querySelector('.cardSide');
const cardContent = document.querySelector('.cardSide h3');
const cardID = document.querySelector('span.cardId');
const numOfCards = document.querySelector('span.numOfCards');
const flipBtn = document.querySelector('.flip');
const lSCards = JSON.parse(localStorage.getItem('cards')) || [];
let count = 0;
let count2 = 0;
let isFliped = false;

let frontSideValue = 'lSCards[count].frontSide';
let backSideValue = 'lSCards[count].backSide';

numOfCards.textContent = lSCards.length;

card.addEventListener('click', () => {
    if (lSCards === "[]") {
        return;
    } else {
        frontSideValue = lSCards[count].frontSide;
        backSideValue = lSCards[count].backSide;
        cardContent.textContent = frontSideValue;
        cardID.textContent = lSCards[count].cardId;
        console.log('front ' + frontSideValue + '\n back ' + backSideValue);
        
        
        count2 = count;
    };
    count++;
    
    console.log(count);
    if (count === lSCards.length) {
        count = 0;
    };        
    
});

flipBtn.addEventListener('click', () => {
    isFliped = !isFliped;
    console.log(count2);
    frontSideValue = lSCards[count2].frontSide;
    backSideValue = lSCards[count2].backSide;
    cardContent.textContent = isFliped? backSideValue : frontSideValue;
});