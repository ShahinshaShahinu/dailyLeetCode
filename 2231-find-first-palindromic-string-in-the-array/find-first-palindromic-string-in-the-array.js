/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    // const isPalindrome = word => {
    //     for (let i = 0; i < word.length / 2; i++) {
    //         if (word[i] !== word[word.length - 1 - i]) return false;
    //     };
    //     return true;
    // }
    // for (let word of words) if (isPalindrome(word)) return word;
    // return ""

    const isPalindrome = w => {
        for (let i = 0; i < w.length / 2; i++) {
            if (w[i] !== w[w.length - 1 - i]) return false;
        }
        return true;
    }

    for (const c of words) if (isPalindrome(c)) return c;

    return "";
};