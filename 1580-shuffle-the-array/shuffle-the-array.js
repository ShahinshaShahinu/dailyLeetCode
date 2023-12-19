/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let Shuffle = [];
    let firstAr = [], secondAr = [], shuf = 0;

    for (let i = 0; i < n; i++) {
        firstAr.push(nums[i])
    }
    for (let j = n; j < nums.length; j++) {
        secondAr.push(nums[j])
    }
    if (firstAr.length < secondAr.length) {
        shuf = secondAr.length
    } else {
        shuf = firstAr.length
    }
    for (let i = 0; i < shuf; i++) {
        if (firstAr.length == shuf) {
            Shuffle.push(firstAr[i])
        }else if(firstAr.length<shuf&&i<shuf){
            Shuffle.push(firstAr[i])
        }

        if (secondAr.length == shuf) {
            Shuffle.push(secondAr[i])
        } else if (secondAr.length < shuf && i < shuf) {
            Shuffle.push(secondAr[i])
        }
        
    }


    return Shuffle
};