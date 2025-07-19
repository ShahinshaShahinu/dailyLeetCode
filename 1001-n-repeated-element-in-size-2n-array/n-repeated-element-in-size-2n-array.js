/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
   const length = nums.length

    for(let i=0; i<length - 3; i++) {
        const set = new Set()
        for(let j=i; j<=i+3; j++){
            if(set.has(nums[j])){
                return nums[j]
            } else{
                set.add(nums[j])
            }
        }

    }

    return false
};