/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   let prev = {};
    
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(diff in prev){
            return [prev[diff],i];
        }
        prev[nums[i]] = i ;  // this is a key assign a value .. done
    }
    return 0;
};