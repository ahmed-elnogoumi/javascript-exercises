const palindromes = function (userWord) {
    
    let word = userWord.replaceAll(",", "").replaceAll(".", "").replace("!", "");
    console.log(word);
    word = word.toLowerCase();
    word = word.replaceAll(" ", "");
    console.log(word);

    // check if array is even or odd
    if (word.length % 2 === 0) {
        let wordFirstHalf = word.substring(0, word.length / 2);
        let wordSecondHalfArray = word.substring(word.length / 2).split("");

        wordSecondHalfArray.reverse();

        let wordSecondHalf = wordSecondHalfArray.join("");

        if (wordFirstHalf === wordSecondHalf) {
            return true;
        }

        return false;

    } else {
        let wordFirstHalf = word.substring(0, (word.length - 1) / 2);
        let wordSecondHalfArray = word.substring((word.length + 1) / 2).split("");

        wordSecondHalfArray.reverse();

        let wordSecondHalf = wordSecondHalfArray.join("");

        if (wordFirstHalf === wordSecondHalf) {
            return true;
        }

        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
