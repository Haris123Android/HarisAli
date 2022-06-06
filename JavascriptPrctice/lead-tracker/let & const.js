const player = "Haris"
const oponent = "Tayyab"
const game = "Amazing Fighter"
let points = 0
let hasWon = false

points +=100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points & won the ${game} game`)
} else {
    console.log(`The winner is ${oponent}! ${player} lost the game`)
}