/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//     let L = 0;
//     let R = s.length - 1;
//     while (L < R) {
//         let Temp = s[L];
//         s[L] = s[R];
//         s[R] = Temp;
//         L++; R--
//     }

//     return s
// };

var reverseString = function (s) {
      let start = 0;
    let end = s.length-1;
    while(start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
};
