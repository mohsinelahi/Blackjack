let age;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submitAge').onclick = () => {
        if (document.querySelector('#age').value > 18) {
            document.querySelector('.step1').style.display = 'none';
            document.querySelector('.step2').style.display = 'block';
        } else if (document.querySelector('#age').value.length == '') {
            alert("Please enter your age!");
        } else {
            alert("Sorry! You're not eligible to play this game!");
        }
    }
})


// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

let player = {
     name: "Mohsin",
     chips: 145
}

let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()* 13 )  + 1;
    if(randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
    // return 5;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard = secondCard;
    renderGame();
    document.querySelector('.cards-total-el').style.display = 'block';
    document.querySelector('.newCard').style.display = 'block';
}

function renderGame() {
    sumEl.textContent = sum;
    cardsEl.textContent = '';
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";

    }
    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else
    if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    // console.log(cards);
    renderGame();
    }
}

