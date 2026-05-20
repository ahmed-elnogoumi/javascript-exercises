const removeFromArray = function(arr, ...toRemove) {
    for (const item of toRemove) {
            arr = arr.filter((value) => {
            return value !== item;
        })
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
