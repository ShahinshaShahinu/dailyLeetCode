/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0 ;
    
  
    while(i<nums.length){
      
        if(nums[i] == nums[i+1]){
            if(nums[i+1] == nums[i+2]) {
                for(let j = i+1 ; j<nums.length;j++) {
                    nums[j] = nums[j+1]
                }
                nums.length-- ;
                i-- ;
            }
        }

        i++
    }


};