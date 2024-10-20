






var first_1 = prompt("Enter your first number");
var second_2 = prompt("Enter your second number");
if (first_1 > second_2) {
    document.write(`${first_1} is greater than ${second_2}`
    )
}

else if (second_2 > first_1) {
    document.write(`${second_2} is greater than ${first_1}`)
}
else {
    document.write("Both numbers are equal")
}