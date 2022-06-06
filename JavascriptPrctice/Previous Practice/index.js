// let myAge = 23;
// console.log(myAge);
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// Reassigning and Incrementing 
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints *2;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints +45;
// console.log(bonusPoints);

// write fuction that logs out number 42 and call it
// function numb(){
//     console.log(42)
//     let num = 42
//     console.log(num)
// }
// numb()

// create a fuction that logs out sum of all lap times
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function sumOfLaps(){
//     let laps = lap1+lap2+lap3
//     console.log(laps)
// }
// sumOfLaps()

// create a function thaT increments the lapscompeleted variable each time when we run
// let lapsCompeleted = 0
// function incrementLap(){
//     lapsCompeleted = lapsCompeleted +1
// }
// incrementLap()
// incrementLap()

// console.log(lapsCompeleted)


let count = 0
let countEl = document.getElementById("count")
function increment(){
    // console.log("Button is Clicked")
    count += 1
    console.log(count)
    countEl.textContent = count
}
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    // return count = 0
    countEl.textContent = 0
    count = 0
}