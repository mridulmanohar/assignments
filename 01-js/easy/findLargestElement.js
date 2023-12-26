/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(nums) {
    let max = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

module.exports = findLargestElement;