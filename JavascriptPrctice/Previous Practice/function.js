let hands = ["Paper", "Rock", "Scissor"];
function randomItemFromArray() {
    let random = Math.floor(Math.random(hands) * 3) 
    return hands[random]
}
console.log(randomItemFromArray())