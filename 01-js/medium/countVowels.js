/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const itr = str.matchAll(/[aeiou]/gi);
    let count = 0;
    for(i of itr) {
        count++;
    }

    return count;
}

module.exports = countVowels;