var age = prompt("Please enter your age");
document.write("Your age is: " , age);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.write("<br> your birth year  is : ", (currentYear - age) );