/*
*Author Danielle Kraljevski
*Created 1/29/2021
*License: Public Domain
*/

//Variable Define
myTransport = ["civic","skateboard", "bicycle"]

myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Black",
  year: 2019,
  age: function() {
    return (2021 - myMainRide.year);
  }
}

//outputt
document.writeln("Kinds of Transportation I have Access to: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>")
