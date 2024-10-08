/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let two = 1
    let one = two
    for(i=1;i<n;i++){
        let temp = one ;
        one = one+two ;
         two =temp
    }

    return one
};
