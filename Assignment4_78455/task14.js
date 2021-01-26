var currentDate = new Date();
var update = currentDate.getHours();
currentDate.setHours(update - 1)
document.write("Current Date: " , currentDate, "<br>");
document.write("1 hour ago it was: ", currentDate);