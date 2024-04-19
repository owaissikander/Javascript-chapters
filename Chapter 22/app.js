var first_Name = prompt("Enter your first name")
var second_Name = prompt("Enter your second name")
document.write("Hello ".toUpperCase() + first_Name.toUpperCase(), second_Name.toUpperCase())





var mobile = prompt("enter your phone")
document.write('my favorite phone is: ' + mobile)
var lenght = mobile.length

document.write("lenght of string is " + lenght)




var country = 'pakistani'
console.log("string " + country)
console.log("index of :" + country[7] + country.indexOf("n"))


var country = 'pakistani'
console.log("string " + country)
console.log("character at index :" + country.indexOf("i")  + country[3] )



var city = 'hyderabad'
var city2 = 'islama'
console.log(city2 + city.slice(6))








var message = 'Ali and Sami are best friends. They play cricket and football together.'
message = message.replaceAll('and','&')
console.log(message)


var one = '12'
console.log(typeof Number(one))



var userInput =prompt('enter peanuts in small & i will give in capital')
console.log(userInput.toUpperCase())


var str = 'javascripte'
console.log(str[0].toUpperCase() + str.slice(1))

