/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    if (sentence.length < 26) return false;
    return new Set(sentence).size === 26
};