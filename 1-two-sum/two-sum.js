/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (prevMap.has(target - nums[i])) {
            return [prevMap.get(target - nums[i]), i]
        }
        prevMap.set(nums[i], i)
    }

    return []


    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return 0
};