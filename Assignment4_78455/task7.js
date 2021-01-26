var str = "The quick brown fox jumps over the lazy dog";
var count = str.match(/the/ig).length;
document.write("There are "+count+" occurences of word");