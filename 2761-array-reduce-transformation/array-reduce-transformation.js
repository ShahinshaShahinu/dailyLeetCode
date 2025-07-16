/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    // let value = 0;
    // let flag = false;
    // for (let i = 0; i < nums.length; i++) {
    //     value = fn(!flag ? init : value, nums[i]);
    //     flag = true;
    // }
    // return value === 0 && nums.length === 0 ? init : value;


    let value = init;
    for (let i = 0; i < nums.length; i++) {
        value = fn(value, nums[i]);
    }
    return value;
};