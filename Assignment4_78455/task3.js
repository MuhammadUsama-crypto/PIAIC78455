var pass = prompt("Set Password");
var lowerCaseAlpha = /[a-z]/;
var UpperCaseAlpha = /[A-Z]/;
var num = /[0-9]/;
if (pass.charAt(0) === /[0-9]/g) {
    document.write("Invalid");
} else if (pass.length >= 8 || pass.lowerCaseAlpha === /[a-z]/g || pass.UpperCaseAlpha === /[A-Z]/g || pass.num === /[0-9]/g) {
    document.write("Valid");
} else {
    document.write("Invalid");
}

