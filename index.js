
var str = "HELLO, WORLD!";
var i = 0;
str = str.replace(/L/g, function (match) {
  i++;
  return (/[1-2]/.test(i)) ? "M" : match;
});

console.log(str); // "HELMO, WORLD!";