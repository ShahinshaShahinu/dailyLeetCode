/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const sortedNums = nums.map((num, idx) => ({ num, idx })).sort((a, b) => a.num - b.num);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left].num + sortedNums[right].num;
        if (sum === target) {
            return [sortedNums[left].idx, sortedNums[right].idx];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // If no solution found
};