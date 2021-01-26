var a = prompt("Enter Your email");
var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
if (a.match(email)) {
    document.write("valid Email");
} else {
    document.write("Invalid Email");
}