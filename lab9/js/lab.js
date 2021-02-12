/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/10/2021
* License: Public Domain
*/

//Create a new element with document.createElement("p") and assign it to a variable new1El
//Change the html attribute of new1El to say something new.
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
//variable outputEl

//new1El = "This is an example of me changing this element to say something new. Using Javascript I can
//hange what elements say using"

//Create another new element and assign it to a variable new2El
//Change the html attribute of new2El to say something else.
var new2El = document.createElement("div");
new2El.innerHTML = "<p>It is not so hard to change the div once you have created a new element using Java!</p>"

//Append both new elements one at a time using appendChild() to your output <div>
//Change the css attributes of at least two elements of your page
outputEl.appendChild(new2El);

document.writeln(new1El);
//HELP IM BAD
