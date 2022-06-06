let fruits = ["Orange","Apple","Apple","Orange","Apple","Orange","Apple"]
let orangeShelf = document.getElementById("orange-el")
let appleShelf = document.getElementById("apple-el")
function settingFruits() {
    for (let f = 0; f < fruits.length; f++) {
            // let fruitsFromArray = fruits[f];
        if (fruits[f] === "Orange") {
            orangeShelf.textContent += fruits[f] + " "
        } else if (fruits[f] === "Apple") {
            appleShelf.textContent += fruits[f] + " "
        }
        
    }
}
settingFruits()