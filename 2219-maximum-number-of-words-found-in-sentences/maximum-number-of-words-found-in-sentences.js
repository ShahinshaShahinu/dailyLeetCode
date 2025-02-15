/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let wordsCount = 0;

    sentences.forEach((sentence) => {
        const lengthOfSentence = sentence.split(' ').length;
        if (wordsCount < lengthOfSentence) {
            wordsCount = lengthOfSentence;
        }
    });
    return wordsCount;
};