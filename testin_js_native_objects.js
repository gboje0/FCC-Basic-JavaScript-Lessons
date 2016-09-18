var numbers = [1,2,3,4,5,6];
function isLessThan3(value,index,array) {
    var returnValue = false; // setting the value to false helps in the 
                             // search, since a false result stops the process
    if (value <= 4) {
        return true;
    }
    return returnValue;
}

if (numbers.some(isLessThan3)) {
    var result = numbers.filter(isLessThan3);
    console.log(result);
}
