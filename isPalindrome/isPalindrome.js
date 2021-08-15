// Determine if a string is a palindrome (reads the same backwards as forwards).

// split the array in half and then compare the first half of the array to the end of the 2nd half of the array. 
const isPalindrome = str => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};