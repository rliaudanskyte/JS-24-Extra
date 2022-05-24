const form = document.querySelector('form');
const cardFront = document.querySelector('#cardFront');
const cardBack = document.querySelector('#cardBack');
const saveBtn = document.querySelector('input[type="submit"]');
const cardNumber = document.querySelector('span.cardId');

const lSCards = JSON.parse(localStorage.getItem('cards')) || [];
cardNumber.textContent = lSCards.length;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cardFrontValue = cardFront.value;
    const cardBackValue = cardBack.value;

    const newCard = new Card(cardFrontValue, cardBackValue);
    newCard.storeLocally();

    cardNumber.textContent = lSCards.length;

    console.log(localStorage);

});

class Card {
    constructor(frontSide, backSide) {
        this.frontSide = frontSide;
        this.backSide = backSide;
    }
    stringifyCards() {
        lSCards.push(this);
        return JSON.stringify(lSCards);
    };
    storeLocally = () => {localStorage.setItem('cards', this.stringifyCards())};
};