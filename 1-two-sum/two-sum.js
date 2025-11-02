/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return 0;

    const prev_map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (prev_map.has(target - nums[i])) {
            return [prev_map.get(target - nums[i]), i]
        }
        prev_map.set(nums[i], i);
    }



};