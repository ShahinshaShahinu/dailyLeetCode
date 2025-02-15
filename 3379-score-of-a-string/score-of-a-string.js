/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let Score = 0;
    for (let index = 1; index < s.length; index++) {
        Score += Math.abs(s.charCodeAt(index - 1) - s.charCodeAt(index));
    }
    return Score;
};