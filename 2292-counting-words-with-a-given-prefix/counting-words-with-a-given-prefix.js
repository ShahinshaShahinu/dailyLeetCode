/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let prefixCount = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let isPrefix = '';
        for (let j = 0; j < pref.length; j++) {
            isPrefix += word[j];
        }
        if (isPrefix === pref) {
            prefixCount++
        }
    }
    return prefixCount
};