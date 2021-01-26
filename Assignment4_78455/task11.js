var num = prompt("Enter a number");
var b = num.split("");
var sum = 0;
for (i = 0; i <b.length; i++) {
    sum = sum + Number(b[i]);
}
document.write("sum is: " , sum);
var avg = sum / b.length;
document.write("Average is: " , avg);