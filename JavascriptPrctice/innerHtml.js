let divEl = document.getElementById("div-el")
divEl.innerHTML = "<button onclick = 'buy()'> Buy! </button>";
function buy() {
    divEl.innerHTML += " Thank you for Buying!"    
}