/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/16/2021
* License: Public Domain
*/
//Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
//Function Define

// Find the section you want to add the button to
var challengeSec = $('#challenge');
var problemSec = $('#problems');
var resultSec = $('#results');
// Create the button
// Give it a text label
var button = "<button>Click Me</button>";
// Add it to the section
challengeSec.append(button);
problemSec.append(button);
resultSec.append(button);

//Using jQuery, do the following for each button:
//Add a click event to each button
//Toggle a class special within the <div> of the section
//Go into your css and style each of the classes
//Test each button
$('#challenge button').click(function() {
  $('#challenge').toggleClass('special');
})

$('#problems button').click(function(){
  $('#problems').toggleClass('special');
})

$('#results button').click(function(){
  $('#results').toggleClass('special');
})
