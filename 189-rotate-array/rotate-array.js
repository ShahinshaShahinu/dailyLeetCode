/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
        const n = nums.length;  
  
    k = k % n;        
            // check is it greater than n //  it is same

    const rotated = new Array(n)    
    // Fill the rotated array with the appropriate values
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i]; // Place each element in its new position
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];          // Update the original array
    }
    return nums
};