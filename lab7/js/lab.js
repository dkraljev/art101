/*
*Author Danielle Kraljevski
*Created 2/2/2021
*License: Public Domain
*/

//Function Define
//split string, sort it, rejoin it
function sortName(userName) {
  var userName = window.prompt("Which name do you want me to fix?");
  console.log("userName=", userName)
  //split
  var strArray = userName.split('');
  console.log("strArray:", strArray);
  //sorted
  var arraySort =strArray.sort();
  console.log("arraySort:", arraySort);
  //join
  var strSort =arraySort.join('');
  console.log("strSort:", strSort);
  return strSort;
}

//input
function tryAgain(){
  window.location.reload();
}

//Output
document.writeln("Fixed!!! Your new name is", sortName(), "</br>");
