const leapYears = function(year) {
    // Checking if leap year conditions are true -- otherwise the statmeent goes down to false
    console.log("The year is " + year);
    console.log(year % 100);
    console.log(year % 400);
    if (year % 4 === 0 && !(year % 100 === 0)) {
        return true;
    } 
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
