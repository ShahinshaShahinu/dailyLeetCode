/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    // return s.split(' ', k).join(' ');

    let newSentence = '';
    let lengthOfNewSentence = 0
    for (let i = 0; i < s.length; i++) {
        if (lengthOfNewSentence == k) {
            return newSentence
        }
        if (s[i] === ' ') {
            lengthOfNewSentence++;
            if (lengthOfNewSentence !== k) {
                newSentence += ' ';
            }
        } else if (s[i] !== ' ') {
            newSentence += s[i];
        }
    }
    return newSentence
};