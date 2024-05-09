/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
  if (nums[i] == nums[i + 1]) {
    // Remove Elements
    for (let j = i; j < nums.length; j++) {
      nums[j] = nums[j + 1];
    }
    nums.length--;
    i--;
  }
}
};