/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

 
const Sum=[]
let v = nums[0] 
 for (let i = 0; i < nums.length; i++) {
     
        if(i>0){
         v += nums[i];
        
            Sum.push(v);
        }else{
            Sum.push(nums[i])
        }
 }
 return Sum
};