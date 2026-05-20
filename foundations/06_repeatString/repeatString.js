const repeatString = function(word, num) {
    let strCnct = [];
    if (num >= 0){
    for (let i = 0; i < num; i++) {
        strCnct.push(word);
        }
    } else {
        return "ERROR";
    }

    return strCnct.join("");
};

// Do not edit below this line
module.exports = repeatString;