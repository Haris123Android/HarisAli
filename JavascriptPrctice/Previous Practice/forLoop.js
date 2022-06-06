let largeCountries = ["Afganistan", "India", "USA", "Indonisia", "Austrailia"]
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log("The Five Largest Countries In The World")
for (let country = 0; country < largeCountries.length; country++) {
    const outCountry = largeCountries[country];
    console.log("- " + outCountry)
}