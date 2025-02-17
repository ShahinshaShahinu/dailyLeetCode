/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let index = 0; index < words.length; index++) {
        let isPalindrome = true;
        let word = words[index];
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] !== word[word.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        };
        if (isPalindrome) {
            return word
        }
    }
    return '';
};