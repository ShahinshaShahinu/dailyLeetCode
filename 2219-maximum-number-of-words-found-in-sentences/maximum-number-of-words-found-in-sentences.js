/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let wordsCount = 0;

    for (let sentence of sentences) {
        const lengthOfSentence = sentence.split(' ').length;
        if (wordsCount < lengthOfSentence) {
            wordsCount = lengthOfSentence;
        }
    }
    return wordsCount;
};