let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerName= "Malay";
let playerChips = 145;
let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + " : $" + playerChips;

function randomCards(){
    let num =  Math.floor(Math.random()*13)+1;
    if (num === 1){
        return 11;
    }
    if(num>10){
        return 10;
    }
    else{
        return num;
    }
}

function startGame(){
    isAlive = true;

    let firstCard = randomCards();
    let secondCard = randomCards();

    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    
    sumEl.textContent = "Sum : " +sum;
    cardEl.textContent = "Cards : ";

    for(let i=0; i<cards.length; i++){
        
        cardEl.textContent += cards[i] + " ";
    }

    if(sum<21){
        message = "Do you want to draw a new card? ^-^";
    
    }
    else if(sum===21){
        message = "Woooh! you have got a BlackJack!";
        hasBlackJack = true;
        playerChips += 45;
        playerEl.textContent = playerName + " : $" + playerChips;

    
    }
    else{
        message ="You are out of the game";
        playerChips -= 20;
        playerEl.textContent = playerName + " : $" + playerChips;

        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = randomCards();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}

