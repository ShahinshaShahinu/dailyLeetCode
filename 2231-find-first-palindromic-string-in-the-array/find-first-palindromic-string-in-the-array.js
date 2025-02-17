/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    const isPalindrome = word => {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] !== word[word.length - 1 - i]) return false;
        };
        return true;
    }
    for (const word of words) if (isPalindrome(word)) return word;
    return ""
};