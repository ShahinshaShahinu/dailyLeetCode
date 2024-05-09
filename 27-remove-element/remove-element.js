/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let i = 0;

while (i < nums.length) {
    if(nums[i] == val){
        if(nums.length-1 == i){
            nums.length--
        }else{           
            for (let j = i; j < nums.length; j++) {
                    nums[j] = nums[j+1]
            }
            i--
            nums.length--
        }
    }
    i++
}
};