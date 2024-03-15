

var time = 1900
var usertime = prompt("Enter your time");
if (usertime >= 1000 && usertime < 1200) {
    document.write("Good morning")
}
else if (usertime >= 1200 && usertime < 1700) {
    document.write("Good afternoon")

}
else if (usertime >= 1700 && usertime < 2100) {
    document.write("Good evening")

}
else if (usertime >= 2100 && usertime <=2359) {
    document.write("Good night")
}
else ("please enter your valid time")