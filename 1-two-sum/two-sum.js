/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let prev_obj = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diff in prev_obj) {
            return [prev_obj[diff], i]
        }
        prev_obj[nums[i]] = i;
    }
};