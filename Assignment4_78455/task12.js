var date = new Date();
var day = date.getDate();
if (day < 16) {
    document.write("first fiteen days of the month");
} else  {
    document.write("Last fifteen days of the month");
}