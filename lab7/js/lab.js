/*
*Author Danielle Kraljevski
*Created 2/2/2021
*License: Public Domain
*/

//Function Define
//split string, sort it, rejoin it
function sortName(userName) {
  var arrayName = userName.split('').sort().join('');
  return arrayName;

}

var name = prompt("What is your name?");
console.log("Old name:", name);
 // Output
 document.writeln("Your name sorted is :",
sortName(name), "</br>");
