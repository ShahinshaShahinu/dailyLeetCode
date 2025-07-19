/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let seen = [];

    for (let num of nums) {
        if (seen.includes(num)) {
            return num;
        }
        seen.push(num);
    }

    return -1;
};