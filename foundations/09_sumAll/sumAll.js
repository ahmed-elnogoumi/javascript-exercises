const sumAll = function(a, b) {
    let arrOfVals = [];
    let totalVal = 0;

    if ((a < 0 || b < 0) || 
        (a % 1 !== 0 || b % 1 !== 0) || 
        (typeof a !== "number" || typeof b !== "number")) {
        return "ERROR";
    }

    // Flipping argument a and b if a is bigger than b
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }


    for (let i = a; i <= b; i++) {
        arrOfVals.push(i);
    }

    arrOfVals.forEach((element, index) => {
        totalVal += arrOfVals[index];
    })

    return totalVal;
};

// Do not edit below this line
module.exports = sumAll;
