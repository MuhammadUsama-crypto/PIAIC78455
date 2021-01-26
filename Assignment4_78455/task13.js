var date = new Date();
var miliSec = date.getTime();
var min = date.getMinutes();
var diff = miliSec - min;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("Current Date : ", date, "<br>" );
document.write("Elapsed Miliseconds since january 1, 1970: " , miliSec , "<br>");
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


