
var age = 21;
alert("i am " + age + " years old");

// Check if visit count is stored in local storage
let visitCount = localStorage.getItem("visitCount");

// If not stored, initialize it to 1
if (!visitCount) {
    visitCount = 1;
    localStorage.setItem("visitCount", visitCount);
} else {
    // Otherwise, increment the stored value
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
}

// Display the visit count
alert("You have visited this site " + visitCount + " times.");


var birthyear = 2002;
console.log("my birthday year is" + birthyear)
// alert('My birth year is '+ birthyear);

