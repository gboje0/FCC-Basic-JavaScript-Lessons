// Modify the function checkObj to test myObj for checkProp. 
// If the property is found, return that property's value. If not, return "Not Found".

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
    var propExist = myObj.hasOwnProperty(checkProp);
    if (propExist === true) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

// Test your code by modifying these values
console.log(checkObj("pet"));



// checkObj("gift") should return "pony".
// checkObj("pet") should return "kitten".
// checkObj("house") should return "Not Found".