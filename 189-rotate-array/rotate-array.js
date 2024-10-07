/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
       const n = nums.length;
    k = k % n; // Normalize k in case it's larger than n
    
    // Get the last k elements
    const endPart = nums.splice(n - k, k);
    // Add the last k elements to the front
    nums.unshift(...endPart);
};