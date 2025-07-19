/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] || nums[i] === nums[i - 2]) {
            return nums[i];
        }
    }
    // If no match found above, it's one of the first two
    return nums[0];
};