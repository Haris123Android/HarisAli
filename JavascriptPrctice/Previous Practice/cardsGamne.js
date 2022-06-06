// let firstCard = 3
// let secondCard = 9
// let sum = firstCard + secondCard

// if(sum < 21) {
//     console.log("Do you want to draw another Card?")
// }else if(sum === 21){
//     console.log("You Got Won")
// } else{
//     console.log("You lost")
// }

// console.log(sum)
// let age = 23

// if(age > 21){
//     console.log("Entered to Night Club!")
// }else if(age === 21) {
//     console.log("Ela Fit ye raza!")
// } else{
//     console.log("Sorry, Da Sta Zai Ne D!")
// }
// let age = 100

// if(age < 100){
//     console.log("Not Eligible")
// }else if(age === 100) {
//     console.log("Here Your Bithday Card From Kig Haris!")
// } else{
//     console.log("Not Eligible You Already Gotten One!")
// }

let player = {
    name: "Harii",
    chips: 120
}

let cards = []
let sum= 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNum = Math.floor( Math.random()*13 ) + 1;
    if(randomNum > 10){
        return 10
    } else if(randomNum === 1){
        return 11
    } else{
        return randomNum
    }
    
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(let c = 0; c < cards.length; c ++) {
        cardsEl.textContent += cards[c] + " "
    }

    sumEl.textContent ="Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
     
     }
     else if(sum===21){
         message ="You've got Blackjack!"
         hasBlackJack = true
     }
     else {
         message ="you are out of the game"
         isAlive = false
     }
     messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstcard=getRandomCard()
    let secondcard= getRandomCard()
    cards = [firstcard, secondcard]
    sum= firstcard+secondcard
   renderGame()
}

function newCard(){
    // messageEl.textContent = "Drawing a new Card from the Dick!"
    if( isAlive === true && hasBlackJack ===false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}



// console.log(isAlive)
