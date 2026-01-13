/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let prev_map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (prev_map.has(target - current)) {
            return [prev_map.get(target - current), i]
        }

        prev_map.set(nums[i],i)
    }
};