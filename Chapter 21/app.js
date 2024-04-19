






let cities = ['karachi', 'lahore', 'islamabad']
let userCity = prompt("enter your city")
for (let i = 0; i < cities.length; i++) {
    if (userCity.toLowerCase() == cities[i].toLowerCase()) {
        alert("it is in our list")
    }
}


let userInput = prompt("types a small words")
console.log(userInput[0].toUpperCase() + userInput.slice(1))


let userInput = prompt("type a appilcation ")
for (let i = 0; i < userInput.length; i++) {
    if (userInput.slice(i, i + 3) === "and") {
        alert("application is not applicable")
    }
    else { alert('application accepted') + "break" }

}