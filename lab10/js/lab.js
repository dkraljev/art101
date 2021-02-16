/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/14/2021
* License: Public Domain
*/

//Function Define
//split string, sort it, rejoin it
function sortName(userName) {
  // split string to array
  var strArray = userName.split(',');
  console.log("strArray =", strArray);
  // sort the array
  var arraySort = strArray.sort();
  console.log("arraySort =", arraySort);
  // join array back to string
  var strSort = arraySort.join('');
  console.log("strSort =", strSort);
  return strSort;

  var button = document.getElementById('my-button');
  button.addEventListener('click', function() {
      inputValue = document.getElementById('user-name').value;
      console.log("You input:", inputValue);
  });
}

buttonEl.addEventListener("click", function(){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("user name:", userName)
});

// a button that let you try again new input
function tryAgain() {
  window.location.reload();
}
//
// Output
document.writeln("Fixed! Here's your name: ", sortName(), "</br>");
