let num1 = 7
let num2 = 9
let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")

function add() {

    let result = num1 + num2
    sumEl.textContent = "Sum :" + result
}

function sub() {

    let result = num1 - num2
    sumEl.textContent = "Sum :" + result
}
function mul() {

    let result = num1 * num2
    sumEl.textContent = "Sum :" + result
}
function divid() {

    let result = num1 / num2
    sumEl.textContent = "Sum :" + result
}
