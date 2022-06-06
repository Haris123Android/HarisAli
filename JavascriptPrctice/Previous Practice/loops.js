// for(let count = 10; count < 101; count += 10){
//     console.log(count)
// }

// let cards = [8, 1, 5, 9, 11]
// for(c = 0; c < cards.length; c += 1) {
//     console.log(cards[c])
// }

let sentence = ["Hello", "My", "Name", "Is", "Haris"]
let greetingEl = document.getElementById("greeting-el")

for(let s = 0; s < sentence.length; s += 1){
    greetingEl.textContent += sentence[s] + " " 
}