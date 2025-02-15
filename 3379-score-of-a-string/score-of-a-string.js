/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let Score = 0;
    for (let index = 0; index < s.length; index++) {
        if (s.charCodeAt(index) && s.charCodeAt(index + 1)) {
            const Value = s.charCodeAt(index) - s.charCodeAt(index + 1);
            if (Value < 0) {
                Score += Value * -1;
            } else if (Value >= 0) {
                Score += Value;
            }
        }
    }
    return Score;
};