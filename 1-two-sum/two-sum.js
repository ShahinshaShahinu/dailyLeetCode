/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const values = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (values.has(diff)) {
            return [values.get(diff), i]
        }
        values.set(nums[i], i)
    }
    return null;
};