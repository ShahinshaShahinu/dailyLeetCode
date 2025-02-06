/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const UniqueSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (UniqueSet.has(nums[i])) return true; else UniqueSet.add(nums[i])
    }
    return false
};