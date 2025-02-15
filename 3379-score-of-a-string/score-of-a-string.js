/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let Score = 0;
    for (let index = 1; index < s.length; index++) {
        Score += Math.abs(s[index - 1].charCodeAt(0) - s[index].charCodeAt(0));
    }
    return Score;
};