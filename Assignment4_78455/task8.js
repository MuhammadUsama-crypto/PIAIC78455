var ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];
var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
'ninety'];
var num = parseInt(prompt("Enter your Number"));
var numString = num.toString();

  if (num < 0) {
    alert("Negative numbers are not supported.");
    }

  else if (num === 0) {
    alert("zero");
  }
  
  else if (num < 20, i = num-1) {
    alert(ones[i]);
   }  

  else if (numString.length === 2) {
alert(tens[numString[0]] + ' ' + ones[numString[1]]);
  }

  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      alert(ones[numString[0]] + ' hundred');
    else
      alert(ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2])));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) alert(ones[numString[0]] + ' thousand');
    if (end < 100) alert(ones[numString[0]] + ' thousand and ' + convert(end));
    alert(ones[numString[0]] + ' thousand ' + convert(end));
  }