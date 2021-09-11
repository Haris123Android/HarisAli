let fruits = ['Banana','Mangoes','Orange'];
// console.log(fruits[0]);

// Push Pop Shift and UnShift in Array
// Push : add to end
// Pop : remove from end
//Shift : remove from start
//UnShift : add to start
fruits.push('Watermelon');
console.log(fruits[3]);

//concat 
//concat tag is concatinating two arrays 

let veggies = ['Photato','Broccoli'];

// console.log(fruits.concat(veggies));
// document.write(fruits.concat(veggies));

// includes and indexOf
// console.log(fruits.includes('Banana', 1));

// if (fruits.includes('Orange')) {
//     console.log("I Really Like Orange");
// }
// console.log(fruits.indexOf('Mangoes'));

// slice is copy a portion of an array
let animals = ['Shark', 'Salmon', 'Whale', 'Bear', 'Lizard','Tortoise'];
// it well take array from index 0 to 2
let swimmers = animals.slice(0,3);
console.log(swimmers);
//it well go all the way after index 4
let reptils = animals.slice(4);
console.log(reptils);
// if we want to go from last index to reverse we enter negative -
let reverse = animals.slice(-4,-2);
console.log(reverse);


