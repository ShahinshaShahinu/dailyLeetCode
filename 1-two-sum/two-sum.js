/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // let prev = {};
    
    // for(let i=0;i<nums.length;i++){
    //     let diff = target - nums[i];
    //     if(diff in prev){
    //         return [prev[diff],i];
    //     }
    //     prev[nums[i]] = i ; 
    // }
    // return [];

       for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target){
                    return [i,j]
                }            
        }
    }
    return -1;
};