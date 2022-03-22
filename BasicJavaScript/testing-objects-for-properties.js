function checkObj(obj, checkProp) {
  // Only change code below this line
   var propPresent = obj.hasOwnProperty(checkProp);
  if(propPresent) {
    return obj[checkProp];
  }
  return "Not Found";

  // Only change code above this line
}