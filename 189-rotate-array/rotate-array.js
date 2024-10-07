/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;            // Step 1: Get the length of the array
    k = k % n;                        // Step 2: Normalize k in case it's greater than n

    const rotated = new Array(n);     // Step 3: Create a new array to hold the rotated values

    // Step 4: Fill the rotated array with the appropriate values
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i]; // Place each element in its new position
    }

    // Step 5: Copy the rotated values back into the original array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];          // Update the original array
    }
};
