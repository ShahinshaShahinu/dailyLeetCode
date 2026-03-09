/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const checkValue = target - nums[i];

        if (prevMap.has(checkValue)) {
            return [prevMap.get(checkValue), i]
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