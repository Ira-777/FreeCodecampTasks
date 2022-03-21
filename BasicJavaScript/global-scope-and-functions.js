// Declare the myGlobal variable below this line
let myGlobal = 10;
oopsGlobal = 5;
function fun1(myGlobal) {
  // Assign 5 to oopsGlobal Here
  var output = "";
  if (typeof myGLobal != "undefined") {
output += "myGlobal: " + myGlobal;
  }
  if (typeof myGlobal != "undefiend") {
output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}