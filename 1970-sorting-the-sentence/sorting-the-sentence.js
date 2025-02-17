/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let NewArray = new Array()
    let eachWord = ''
    for (let i = 0; i < s.length; i++) {
        if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', ' '].includes(s[i])) {
            eachWord += s[i];
        } else {
            let index = parseInt(s[i]);
            NewArray[index - 1] = eachWord + ' ';
            eachWord = ''
        }
    }
    return NewArray.join('').trim()
};