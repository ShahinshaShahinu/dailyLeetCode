/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s, L = 0, R = s.length - 1) {
    if (L >= R) return;

    let Temp = s[L];
    s[L] = s[R];
    s[R] = Temp;

    reverseString(s , L+1 , R-1);
};
