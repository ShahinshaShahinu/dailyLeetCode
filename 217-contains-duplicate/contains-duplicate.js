/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
   // Create a set to store unique elements
    let numSet = new Set();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the set already contains the element, return true
        if (numSet.has(nums[i])) {
            return true;
        }
        // Add the element to the set
        numSet.add(nums[i]);
    }
    
    // If no duplicates are found, return false
    return false;
};