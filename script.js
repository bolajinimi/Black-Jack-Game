let sum = 0
let cardArray = []
let message = "";
let hasBlack = false
let isAlive = false

console.log(cardArray)


let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

let player = {
    name: "clem",
    chips: 145
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardArray = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: " 

    for ( let i = 0; i < cardArray.length; i++ ) {

        cardsEl.textContent += cardArray[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 20) {
        message = "Do you want to play a game?"
    } 
    else if (sum === 20) {
    
        message = "You've got blackjack!"
        hasBlack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {

    if (hasBlack === false && isAlive === true ) {

        let card = getRandomCard()

        sum += card
        
        cardArray.push(card)
    
       
    
        renderGame()

    }

   
    
}