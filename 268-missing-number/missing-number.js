/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     const n = nums.length;
  let sum = (n * (n + 1)) / 2; // Sum of natural numbers from 0 to n
  for (let i = 0; i < n; i++) {
    sum -= nums[i]; // Subtract each number in nums
  }
  return sum;
};