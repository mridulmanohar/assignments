/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let s1 = str.replace(/[\s+]|[\W+]/g, '').toLowerCase();     // remove non-word and spl chars from string and convert toLower case
    const l1 = s1.length;
    for(let i = 0; i < l1; i++) {
        if(s1.charAt(i) != s1.charAt(l1-i-1)) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
