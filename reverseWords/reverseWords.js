// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function (str) {
    var words = str.split(" ");
    var reversedWords = words.reverse();

    return reversedWords.join(" ");
};

// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function (str) {
    var result = "";

    for (var i = str.length - 1; i >= 0; i--) {
        var letter = str[i];
        result += letter;
    }

    return result;
};