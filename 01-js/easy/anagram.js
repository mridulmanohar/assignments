/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    /*console.log(typeof str1)
    console.log(typeof str2)*/

    let s1 = str1.replace(/\s+/g, '').toLowerCase();
    //console.log(s1);
    const l1 = s1.length;
    
    let s2 = str2.replace(/\s+/g, '').toLowerCase();
    //console.log(s2);
    const l2 = s2.length;

    if(l1 != l2)
      return false;

    for(let i = 0; i < l1; i++) {
        if(s2.search(s1.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;

isAnagram('hello', 'world')
// let res = isAnagram('hello', 'hello!')
//console.log(res);
