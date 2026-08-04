const fibonacci = function(i) {
    let fib_array = [];
    
    if (typeof i === "string") {
        i = parseInt(i);
    }

    if (i < 0) {
        return "OOPS";
    }
    
    if (i === 0) {
        return 0;
    }

    for (let x = 0; x < i; x++) {
        if (x === 0 || x === 1) {
            fib_array.push(1);
        } else {
            fib_array.push(fib_array[x - 1] + fib_array[x - 2]);
            console.log(fib_array);
            console.log(x);
        }
    }

    return fib_array.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
